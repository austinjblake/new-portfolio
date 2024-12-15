'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

interface BlogPostProps {
  title: string
  description: string
  date: string
  slug: string
}

export default function BlogPost({ title, description, date, slug }: BlogPostProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{date}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="mb-4">{description}</p>
          <Link href={`/blog/${slug}`} className="text-primary hover:underline">
            Read More
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

