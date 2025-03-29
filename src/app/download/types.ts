export type ResourceType =
  | "Whitepaper"
  | "Case Study"
  | "Technical Brief"
  | "Solution Guide"
  | "Datasheet"
  | "Security Advisory"
  | "Implementation Guide"

export type Product = "URP" | "121" | "BSG" | "MBSecure+" | "VSecure"

export interface Resource {
  id: string
  title: string
  description: string
  type: ResourceType
  product: Product
  downloadUrl: string
}