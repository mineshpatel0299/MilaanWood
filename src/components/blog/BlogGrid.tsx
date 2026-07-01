"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogGrid() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <section className="bg-white px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-24">
        
        {/* Featured Post (Full Width) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="group cursor-pointer"
        >
          <Link href={`/blog/${featuredPost.slug}`} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="w-full lg:w-[60%] relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-neutral-100">
              <Image 
                src={featuredPost.coverImage} 
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-neutral-900 border border-neutral-900 px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                  {featuredPost.readTime}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-[1.1] tracking-tight mb-6 group-hover:text-neutral-600 transition-colors">
                {featuredPost.title}
              </h2>
              
              <p className="text-neutral-500 leading-relaxed mb-8 text-lg">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-neutral-900 group-hover:text-neutral-500 transition-colors">
                Read Article
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-200" />

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[1rem] bg-neutral-100 mb-6">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400">
                      {post.category}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-300">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-neutral-900 leading-[1.2] tracking-tight mb-4 group-hover:text-neutral-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium text-neutral-900 group-hover:text-neutral-500 transition-colors">
                    Read Article
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
