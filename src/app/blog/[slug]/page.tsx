import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/home/CTA";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Custom transparent navbar for the article */}
      <div className="absolute top-0 left-0 w-full z-50 p-2 md:p-5">
         <Navbar variant="center" />
      </div>

      {/* Article Header (Full Bleed Image) */}
      <div className="relative w-full h-[60vh] md:h-[75vh] bg-neutral-900">
        <Image 
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 md:px-16 pb-16 md:pb-24 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-white border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
              {post.category}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-sm md:text-base text-white/60 tracking-[0.2em] uppercase">
            By {post.author} • {post.date}
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-3xl mx-auto px-6 pt-12 md:pt-16">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>
      </div>

      {/* Article Content */}
      <article className="w-full bg-white relative">
        <div className="max-w-[800px] mx-auto px-6 py-20 md:py-32 font-serif">
          
          <p className="text-2xl md:text-4xl text-neutral-900 font-light leading-relaxed mb-24 italic text-center text-balance font-serif">
            "{post.excerpt}"
          </p>

          <div className="flex flex-col gap-12 text-lg md:text-xl text-neutral-600 leading-[2] font-light">
            {post.content.map((block, index) => {
              
              if (block.startsWith("IMAGE:")) {
                const imgPath = block.replace("IMAGE:", "");
                return (
                  <div key={index} className="w-screen max-w-none relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-12">
                    <div className="relative w-full aspect-[21/9] md:h-[80vh] bg-neutral-900">
                      <Image 
                        src={imgPath}
                        alt="Article inline imagery"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              }

              if (block.startsWith("QUOTE:")) {
                const quoteText = block.replace("QUOTE:", "");
                return (
                  <blockquote key={index} className="my-16 pl-8 md:pl-12 border-l-2 border-[#c1a077]">
                    <p className="text-2xl md:text-4xl text-neutral-900 font-light italic leading-relaxed">
                      "{quoteText}"
                    </p>
                  </blockquote>
                );
              }

              return (
                <p key={index} className={index === 0 ? "first-letter:text-7xl first-letter:font-light first-letter:text-neutral-900 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]" : ""}>
                  {block}
                </p>
              );
            })}
          </div>

          {/* Article Footer */}
          <div className="mt-32 pt-16 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 font-sans font-medium">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900 font-sans">Written by {post.author}</p>
              <p className="text-xs text-neutral-500 font-sans">Milan Wood Editorial</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="text-[10px] tracking-[0.2em] uppercase font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-sans border border-neutral-200 px-4 py-2 rounded-full">
              Share Article
            </button>
          </div>
        </div>
        </div>
      </article>

      <CTA />
      <Footer />
    </main>
  );
}
