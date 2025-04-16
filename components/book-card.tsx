import Link from "next/link"
import type { Book } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/books/${book.id}`} className="block">
        <div className="aspect-[2/3] w-full overflow-hidden">
          <img
            src={book.coverImage || "/placeholder.svg"}
            alt={book.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2">
          {book.category}
        </Badge>
        <Link href={`/books/${book.id}`} className="block">
          <h3 className="line-clamp-1 font-semibold">{book.title}</h3>
          <p className="line-clamp-1 text-sm text-muted-foreground">{book.author}</p>
        </Link>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="font-bold">${book.price.toFixed(2)}</div>
        <Button size="sm" variant="outline">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
