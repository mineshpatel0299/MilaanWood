'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
 const posts = blogPosts.slice(0, 3);

 return (
 <section className="bg-white px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
 <div className="max-w-[1400px] mx-auto flex flex-col gap-16">

 <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 >
 <span className="text-[10px] tracking-wider uppercase font-medium text-neutral-400 mb-4 block">
 The Journal
 </span>
 <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-[1.1] tracking-tight">
 Insights &amp; <span className=" text-neutral-400">Craftsmanship.</span>
 </h2>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, delay: 0.1 }}
 >
 <Link
 href="/blog"
 className="inline-flex items-center gap-2 text-xs tracking-wide uppercase font-medium text-neutral-900 hover:text-neutral-500 transition-colors group"
 >
 View All Articles
 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
 </Link>
 </motion.div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
 {posts.map((post, index) => (
 <motion.div
 key={post.id}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, delay: index * 0.1 }}
 className="group cursor-pointer flex flex-col"
 >
 <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
 <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
 <Image
 src={post.coverImage}
 alt={post.title}
 fill
 className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
 />
 </div>

 <div className="flex flex-col flex-grow">
 <div className="flex items-center justify-between mb-4">
 <span className="text-[9px] tracking-wider uppercase text-neutral-400">
 {post.category}
 </span>
 <span className="text-[9px] tracking-wide uppercase text-neutral-300">
 {post.readTime}
 </span>
 </div>

 <h3 className="text-xl md:text-2xl font-light text-neutral-900 leading-[1.2] tracking-tight mb-4 group-hover:text-neutral-600 transition-colors">
 {post.title}
 </h3>

 <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-2">
 {post.excerpt}
 </p>

 <div className="mt-auto flex items-center gap-2 text-[10px] tracking-wide uppercase font-medium text-neutral-900 group-hover:text-neutral-500 transition-colors">
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
