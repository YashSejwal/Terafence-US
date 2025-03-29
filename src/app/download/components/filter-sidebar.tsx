"use client"

import { motion } from "framer-motion"
import { X, ChevronDown, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { ResourceType, Product } from "../types"

interface FilterSidebarProps {
  selectedTypes: ResourceType[]
  selectedProducts: Product[]
  toggleType: (type: ResourceType) => void
  toggleProduct: (product: Product) => void
  clearAllFilters: () => void
}

export default function FilterSidebar({
  selectedTypes,
  selectedProducts,
  toggleType,
  toggleProduct,
  clearAllFilters,
}: FilterSidebarProps) {
  const resourceTypes: ResourceType[] = [
    "Whitepaper",
    "Case Study",
    "Technical Brief",
    "Solution Guide",
    "Datasheet",
    "Security Advisory",
    "Implementation Guide",
  ]

  const products: Product[] = ["URP", "BSG", "121", "MBSecure+", "VSecure"]

  const hasActiveFilters = selectedTypes.length > 0 || selectedProducts.length > 0

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-[#0A2540] text-white p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </h2>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
        <p className="text-white/70 text-sm mt-1">Refine your search results</p>
      </div>

      <div className="p-6">
        {/* Resource Type Filter */}
        <Collapsible defaultOpen className="mb-6">
          <CollapsibleTrigger className="flex justify-between items-center w-full py-2 text-[#0A2540] font-bold">
            Resource Type
            <div className="flex items-center">
              <span className="text-xs bg-slate-100 text-slate-600 rounded-full px-2 py-0.5 mr-2">
                {selectedTypes.length || 0}
              </span>
              <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200 ui-open:rotate-180" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 mt-3 pl-1">
              {resourceTypes.map((type) => (
                <div key={type} className="flex items-center">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleType(type)}
                    />
                    <span className="w-5 h-5 mr-3 border border-slate-300 rounded flex items-center justify-center transition-colors peer-checked:bg-[#0077B6] peer-checked:border-[#0077B6] group-hover:border-[#0077B6]/50">
                      {selectedTypes.includes(type) && (
                        <motion.svg
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </motion.svg>
                      )}
                    </span>
                    <span className="text-sm text-slate-700 group-hover:text-[#0A2540]">{type}</span>
                  </label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="h-px bg-slate-100 my-6"></div>

        {/* Product Filter */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex justify-between items-center w-full py-2 text-[#0A2540] font-bold">
            Product
            <div className="flex items-center">
              <span className="text-xs bg-slate-100 text-slate-600 rounded-full px-2 py-0.5 mr-2">
                {selectedProducts.length || 0}
              </span>
              <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200 ui-open:rotate-180" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 mt-3 pl-1">
              {products.map((product) => (
                <div key={product} className="flex items-center">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={selectedProducts.includes(product)}
                      onChange={() => toggleProduct(product)}
                    />
                    <span className="w-5 h-5 mr-3 border border-slate-300 rounded flex items-center justify-center transition-colors peer-checked:bg-[#00B4D8] peer-checked:border-[#00B4D8] group-hover:border-[#00B4D8]/50">
                      {selectedProducts.includes(product) && (
                        <motion.svg
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </motion.svg>
                      )}
                    </span>
                    <span className="text-sm text-slate-700 group-hover:text-[#0A2540]">{product}</span>
                  </label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Apply filters button (mobile only) */}
      <div className="p-6 pt-0 md:hidden">
        <Button className="w-full bg-[#0077B6] hover:bg-[#0077B6]/90 text-white">Apply Filters</Button>
      </div>
    </div>
  )
}