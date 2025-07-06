"use client"

import { useState } from "react"
import Image from "next/image"
import { Package, Truck, CheckCircle, Clock, Download, Eye, User, Settings, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const orders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "delivered",
    total: 79.99,
    items: [
      {
        name: "Wireless Bluetooth Headphones",
        image: "/placeholder.svg?height=60&width=60",
        seller: "TechStore Pro",
        price: 79.99,
        quantity: 1,
      },
    ],
    tracking: "TRK123456789",
    deliveryDate: "2024-01-18",
  },
  {
    id: "ORD-002",
    date: "2024-01-20",
    status: "shipped",
    total: 224.98,
    items: [
      {
        name: "Smart Fitness Watch",
        image: "/placeholder.svg?height=60&width=60",
        seller: "FitTech",
        price: 199.99,
        quantity: 1,
      },
      {
        name: "Organic Cotton T-Shirt",
        image: "/placeholder.svg?height=60&width=60",
        seller: "EcoFashion",
        price: 24.99,
        quantity: 1,
      },
    ],
    tracking: "TRK987654321",
    estimatedDelivery: "2024-01-25",
  },
  {
    id: "ORD-003",
    date: "2024-01-22",
    status: "processing",
    total: 299.99,
    items: [
      {
        name: "Professional Camera Lens",
        image: "/placeholder.svg?height=60&width=60",
        seller: "PhotoGear",
        price: 299.99,
        quantity: 1,
      },
    ],
  },
]

const wishlistItems = [
  {
    id: 1,
    name: "Gaming Mechanical Keyboard",
    price: 129.99,
    originalPrice: 149.99,
    image: "/placeholder.svg?height=100&width=100",
    seller: "GameTech",
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 49.99,
    image: "/placeholder.svg?height=100&width=100",
    seller: "TechStore Pro",
    inStock: false,
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    originalPrice: 109.99,
    image: "/placeholder.svg?height=100&width=100",
    seller: "AudioMax",
    inStock: true,
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "processing":
      return <Clock className="w-4 h-4 text-yellow-500" />
    case "shipped":
      return <Truck className="w-4 h-4 text-blue-500" />
    case "delivered":
      return <CheckCircle className="w-4 h-4 text-green-500" />
    default:
      return <Package className="w-4 h-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "processing":
      return "bg-yellow-100 text-yellow-800"
    case "shipped":
      return "bg-blue-100 text-blue-800"
    case "delivered":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("orders")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600">Manage your orders, wishlist, and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">John Doe</h3>
                    <p className="text-gray-600">john.doe@example.com</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "orders" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="w-4 h-4 mr-2" />
                    My Orders
                  </Button>
                  <Button
                    variant={activeTab === "wishlist" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "orders" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{orders.length}</div>
                      <div className="text-sm text-gray-600">Total Orders</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{orders.filter((o) => o.status === "delivered").length}</div>
                      <div className="text-sm text-gray-600">Delivered</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{orders.filter((o) => o.status !== "delivered").length}</div>
                      <div className="text-sm text-gray-600">In Progress</div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {orders.map((order) => (
                        <div key={order.id} className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div>
                                <h3 className="font-semibold">Order {order.id}</h3>
                                <p className="text-sm text-gray-600">
                                  Placed on {new Date(order.date).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <Badge className={getStatusColor(order.status)}>
                                {getStatusIcon(order.status)}
                                <span className="ml-1 capitalize">{order.status}</span>
                              </Badge>
                              <span className="font-semibold">${order.total}</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex items-center space-x-4">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  width={60}
                                  height={60}
                                  className="w-15 h-15 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                  <h4 className="font-medium">{item.name}</h4>
                                  <p className="text-sm text-gray-600">
                                    Sold by {item.seller} • Qty: {item.quantity}
                                  </p>
                                </div>
                                <span className="font-medium">${item.price}</span>
                              </div>
                            ))}
                          </div>

                          {order.tracking && (
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium">Tracking: {order.tracking}</p>
                                  {order.status === "delivered" ? (
                                    <p className="text-sm text-green-600">
                                      Delivered on {new Date(order.deliveryDate!).toLocaleDateString()}
                                    </p>
                                  ) : (
                                    <p className="text-sm text-gray-600">
                                      Estimated delivery: {new Date(order.estimatedDelivery!).toLocaleDateString()}
                                    </p>
                                  )}
                                </div>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Eye className="w-4 h-4 mr-1" />
                                    Track
                                  </Button>
                                  {order.status === "delivered" && (
                                    <Button variant="outline" size="sm">
                                      <Download className="w-4 h-4 mr-1" />
                                      Invoice
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Wishlist ({wishlistItems.length} items)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {wishlistItems.map((item) => (
                        <Card key={item.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="relative mb-4">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={200}
                                height={150}
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <Button
                                size="sm"
                                variant="ghost"
                                className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                              >
                                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                              </Button>
                            </div>

                            <h3 className="font-semibold mb-2 line-clamp-2">{item.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">by {item.seller}</p>

                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <span className="font-bold">${item.price}</span>
                                {item.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through ml-2">${item.originalPrice}</span>
                                )}
                              </div>
                              <Badge variant={item.inStock ? "secondary" : "destructive"}>
                                {item.inStock ? "In Stock" : "Out of Stock"}
                              </Badge>
                            </div>

                            <Button className="w-full" size="sm" disabled={!item.inStock}>
                              Add to Cart
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      rows={3}
                      defaultValue="123 Main Street, Apt 4B, New York, NY 10001"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Email Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3" />
                          Order updates and shipping notifications
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3" />
                          New deals and promotions
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          Product recommendations
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Privacy Settings</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3" />
                          Make my reviews public
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          Allow sellers to contact me
                        </label>
                      </div>
                    </div>

                    <Button>Save Settings</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full">
                      Enable Two-Factor Authentication
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
