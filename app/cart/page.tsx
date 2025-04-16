import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { books } from "@/lib/data"

export default function CartPage() {
  // For demo purposes, let's assume we have 3 books in the cart
  const cartItems = [
    { book: books[0], quantity: 1 },
    { book: books[2], quantity: 2 },
    { book: books[5], quantity: 1 },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.book.price * item.quantity, 0)
  const shipping = 4.99
  const total = subtotal + shipping

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.book.id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img
                          src={item.book.coverImage || "/placeholder.svg"}
                          alt={item.book.title}
                          className="h-16 w-12 rounded object-cover"
                        />
                        <div>
                          <div className="font-medium">{item.book.title}</div>
                          <div className="text-sm text-muted-foreground">by {item.book.author}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">${item.book.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none">
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      ${(item.book.price * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-6 flex justify-between">
              <Link href="/books">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
              <Button variant="outline">Update Cart</Button>
            </div>
          </div>

          <div>
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full mt-6">Proceed to Checkout</Button>
            </div>

            <div className="mt-6 rounded-lg border p-6">
              <h3 className="font-medium mb-4">Have a coupon?</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter coupon code" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any books to your cart yet.</p>
          <Link href="/books">
            <Button>Browse Books</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
