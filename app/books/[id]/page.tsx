import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"

import { books } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import BookCard from "@/components/book-card"

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((book) => book.id === params.id)

  if (!book) {
    notFound()
  }

  // Get related books (same category, excluding current book)
  const relatedBooks = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4)

  return (
    <div className="container py-10">
      <Link href="/books" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Books
      </Link>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={book.coverImage || "/placeholder.svg"}
            alt={book.title}
            className="rounded-lg shadow-lg max-w-full h-auto max-h-[500px]"
          />
        </div>

        <div className="space-y-6">
          <div>
            <Badge>{book.category}</Badge>
            <h1 className="text-3xl font-bold mt-2">{book.title}</h1>
            <p className="text-lg text-muted-foreground">by {book.author}</p>
          </div>

          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < book.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">({book.reviews} reviews)</span>
          </div>

          <div className="text-2xl font-bold">${book.price.toFixed(2)}</div>

          <div>
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-muted-foreground">{book.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Publisher</h4>
              <p>{book.publisher}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Publication Date</h4>
              <p>{book.publicationDate}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Pages</h4>
              <p>{book.pages}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Language</h4>
              <p>{book.language}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="text-2xl font-bold mb-6">Related Books</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}
