import { books } from "@/lib/data"
import BookCard from "@/components/book-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function BooksPage() {
  // Get all categories from books
  const categories = [...new Set(books.map((book) => book.category))]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Browse Books</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Search</h3>
            <div className="flex gap-2">
              <Input placeholder="Search books..." className="flex-1" />
              <Button>Search</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Price Range</h3>
            <div className="space-y-4">
              <Slider defaultValue={[0, 50]} max={100} step={1} />
              <div className="flex justify-between">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Sort By</h3>
            <Select defaultValue="relevance">
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="bestselling">Bestselling</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
