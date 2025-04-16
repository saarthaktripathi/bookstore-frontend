import Link from "next/link"
import { BookOpen, ShoppingCart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import BookCard from "@/components/book-card"
import { books } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  // Get featured books (first 4)
  const featuredBooks = books.slice(0, 4)

  // Get new arrivals (next 3)
  const newArrivals = books.slice(4, 7)

  // Get trending books (next 4)
  const trendingBooks = books.slice(7, 11)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <Link href="/" className="text-xl font-bold">
              PageTurner
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="font-medium">
                Home
              </Link>
              <Link href="/books" className="font-medium">
                Books
              </Link>
              <Link href="/categories" className="font-medium">
                Categories
              </Link>
              <Link href="/about" className="font-medium">
                About
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href="/cart">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Shopping Cart</span>
                </Button>
              </Link>
              <Link href="/signin">
                <Button>Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Next Favorite Book
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore our vast collection of books across all genres. From bestsellers to hidden gems, find your
                    perfect read.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/books">
                    <Button size="lg">Browse Books</Button>
                  </Link>
                  <Link href="/categories">
                    <Button size="lg" variant="outline">
                      View Categories
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/placeholder.svg?height=550&width=450"
                  alt="Bookstore Hero"
                  width={550}
                  height={450}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Books</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our hand-picked selection of must-read books for this month.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">New Releases</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Just Arrived</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The latest additions to our bookstore. Fresh off the press.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {newArrivals.map((book) => (
                <Card key={book.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      width={500}
                      height={300}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="line-clamp-1">{book.title}</CardTitle>
                    <p className="line-clamp-2 text-sm text-muted-foreground pt-2">{book.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex justify-between w-full items-center">
                      <span className="font-bold">${book.price.toFixed(2)}</span>
                      <Link href={`/books/${book.id}`}>
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  <span>Trending Now</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular This Week</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The books everyone is talking about. Bestsellers and reader favorites.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {trendingBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/books">
                <Button size="lg" variant="outline">
                  View All Books
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-lg font-bold">PageTurner</span>
            </div>
            <p className="text-sm text-muted-foreground">Your destination for literary adventures.</p>
          </div>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Shop</h3>
              <Link href="/books" className="text-sm text-muted-foreground hover:underline">
                All Books
              </Link>
              <Link href="/categories" className="text-sm text-muted-foreground hover:underline">
                Categories
              </Link>
              <Link href="/bestsellers" className="text-sm text-muted-foreground hover:underline">
                Bestsellers
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">About</h3>
              <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                Our Story
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
                Contact
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:underline">
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Legal</h3>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                Terms of Service
              </Link>
            </div>
          </nav>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} PageTurner. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
