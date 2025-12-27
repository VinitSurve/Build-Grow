"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const codeSnippet = `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const result = await model.generateContent({
  contents: [{
    role: "user",
    parts: [{ text: "Build the future" }]
  }]
});

console.log(result.response.text());`

// Syntax highlighting helper
const highlightCode = (code: string) => {
  const lines = code.split('\n')
  
  return lines.map((line, lineIndex) => {
    // Handle import statement
    if (line.includes('import {') && line.includes('from')) {
      const parts = line.match(/^(import)\s+{\s*(\w+)\s*}\s+(from)\s+"([^"]+)"(.*)$/)
      if (parts) {
        return (
          <div key={lineIndex} className="flex">
            <span className="text-[#8B7EC8]">{parts[1]}</span>
            <span className="text-white"> {"{ "}</span>
            <span className="text-[#4FC1FF]">{parts[2]}</span>
            <span className="text-white">{" } "}</span>
            <span className="text-[#8B7EC8]">{parts[3]} </span>
            <span className="text-[#6AAB73]">"{parts[4]}"</span>
            <span className="text-white">{parts[5]}</span>
          </div>
        )
      }
    }

    // Handle const declarations with new
    if (line.match(/^const\s+\w+\s*=\s*new/)) {
      const parts = line.match(/^(const)\s+(\w+)\s*=\s*(new)\s+(\w+)\(([^)]*)\)(.*)$/)
      if (parts) {
        return (
          <div key={lineIndex} className="flex">
            <span className="text-[#8B7EC8]">{parts[1]} </span>
            <span className="text-white">{parts[2]} = </span>
            <span className="text-[#8B7EC8]">{parts[3]} </span>
            <span className="text-white">{parts[4]}</span>
            <span className="text-white">(</span>
            <span className="text-white">{parts[5]}</span>
            <span className="text-white">){parts[6]}</span>
          </div>
        )
      }
    }

    // Handle const with method call
    if (line.match(/^const\s+\w+\s*=\s*\w+\./) && !line.includes('new')) {
      const parts = line.match(/^(const)\s+(\w+)\s*=\s*(\w+)\.(\w+)\(\{(.*)$/)
      if (parts) {
        return (
          <div key={lineIndex} className="flex">
            <span className="text-[#8B7EC8]">{parts[1]} </span>
            <span className="text-white">{parts[2]} = {parts[3]}.{parts[4]}</span>
            <span className="text-white">({"{"}</span>
            <span className="text-white">{parts[5]}</span>
          </div>
        )
      }
    }

    // Handle model property line with string
    if (line.match(/^\s+model:\s+"/)) {
      const parts = line.match(/^(\s+)(model):\s+"([^"]+)"(.*)$/)
      if (parts) {
        return (
          <div key={lineIndex} className="flex">
            <span>{parts[1]}</span>
            <span className="text-white">{parts[2]}: </span>
            <span className="text-[#E8936C]">"{parts[3]}"</span>
            <span className="text-white">{parts[4]}</span>
          </div>
        )
      }
    }

    // Handle const result = await
    if (line.match(/^const\s+result\s*=\s*await/)) {
      const parts = line.match(/^(const)\s+(\w+)\s*=\s*(await)\s+(.*)$/)
      if (parts) {
        return (
          <div key={lineIndex} className="flex">
            <span className="text-[#8B7EC8]">{parts[1]} </span>
            <span className="text-white">{parts[2]} = </span>
            <span className="text-[#8B7EC8]">{parts[3]} </span>
            <span className="text-white">{parts[4]}</span>
          </div>
        )
      }
    }

    // Handle role: "user"
    if (line.match(/^\s+role:\s+"/)) {
      const parts = line.match(/^(\s+)(role):\s+"([^"]+)"(.*)$/)
      if (parts) {
        return (
          <div key={lineIndex} className="flex">
            <span>{parts[1]}</span>
            <span className="text-white">{parts[2]}: </span>
            <span className="text-[#E8936C]">"{parts[3]}"</span>
            <span className="text-white">{parts[4]}</span>
          </div>
        )
      }
    }

    // Handle text: "Build the future"
    if (line.match(/text:\s+"/)) {
      const parts = line.match(/^(\s+)(parts):\s+\[\{\s+(text):\s+"([^"]+)"\s+}\](.*)$/)
      if (parts) {
        return (
          <div key={lineIndex} className="flex">
            <span>{parts[1]}</span>
            <span className="text-white">{parts[2]}: [{"{ "}</span>
            <span className="text-white">{parts[3]}: </span>
            <span className="text-[#E8936C]">"{parts[4]}"</span>
            <span className="text-white">{" }]"}{parts[5]}</span>
          </div>
        )
      }
    }

    // Handle console.log
    if (line.includes('console.log')) {
      const parts = line.match(/^(console)\.(log)\((.+)\)(.*)$/)
      if (parts) {
        return (
          <div key={lineIndex} className="flex">
            <span className="text-white">{parts[1]}.{parts[2]}</span>
            <span className="text-white">({parts[3]})</span>
            <span className="text-white">{parts[4]}</span>
          </div>
        )
      }
    }

    // Default: plain text with proper indentation
    return (
      <div key={lineIndex} className="flex">
        <span className="text-white">{line}</span>
      </div>
    )
  })
}

export function TypewriterCode() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeSnippet[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl overflow-hidden bg-[#2B2B2B] border border-gray-700/50 shadow-2xl w-full"
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-3 border-b border-gray-700/50 bg-[#2B2B2B]">
          <div className="flex gap-1.5 lg:gap-2">
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[10px] lg:text-xs text-gray-400 ml-2 font-mono">gemini-ai.ts</span>
        </div>

        {/* Code Content */}
        <div className="p-3 lg:p-4 xl:p-6 font-mono text-[10px] lg:text-[11px] xl:text-[13px] leading-[1.6] overflow-x-auto bg-[#2B2B2B] max-h-[400px] lg:max-h-[500px]">
          <pre className="text-white">
            <code>
              {highlightCode(displayedCode)}
            </code>
          </pre>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block w-[8px] h-[14px] lg:w-[10px] lg:h-[18px] bg-cyan-400 ml-0.5"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default TypewriterCode
