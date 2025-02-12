"use client";

import { Link } from "next-view-transitions";
import { Button } from "../atoms/Button";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import useCartStore from "@/store/useCartStore";
import { AnimatePresence, motion } from "motion/react";
export const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const { totalItems } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ClothResale
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-900"
            >
              Shop
            </Link>

            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900"
            >
              Dashboard
            </Link>

            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-900"
            >
              <SearchIcon className="w-6 h-6" />
            </Link>
            <Link
              href="/cart"
              className="text-gray-600 hover:text-gray-900 relative"
            >
              <CartIcon className="w-6 h-6 relative z-10" />
              {
                // Cart count
                <span className="absolute -top-4 -right-4 pointer-events-none inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-primary-600 rounded-full">
                  {mounted ? totalItems() : 0}
                </span>
              }
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <span className="mr-2">{user?.name}</span>
                  {isUserMenuOpen ? (
                    <ChevronUpIcon className="w-4 h-4 rotate-180" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile Settings
                    </Link>
                    <Link
                      href="/dashboard/wishlist"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Wishlist
                    </Link>
                    <button
                      onClick={() => logout()}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button variant="primary" size="sm" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button with animated icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 p-2 rounded-lg transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } top-2.5`}
              />
              <span
                className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-5"
                }`}
              />
            </div>
          </button>

          {/* Mobile menu with animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={toggleMenu}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <span className="text-xl font-semibold">Menu</span>
                      <button
                        onClick={toggleMenu}
                        className="p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Navigation Items */}
                    <motion.nav
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex-1 overflow-y-auto"
                    >
                      <div className="px-4 py-6 space-y-6">
                        {/* User Section */}

                        {!isAuthenticated && (
                          <div className="mb-8">
                            <Button
                              variant="primary"
                              size="lg"
                              asChild
                              className="w-full"
                            >
                              <Link
                                href="/auth/login"
                                onClick={() => toggleMenu()}
                              >
                                Sign In
                              </Link>
                            </Button>
                          </div>
                        )}
                        {/* Navigation Links */}
                        <div className="space-y-1">
                          <Link
                            href="/products"
                            className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                            onClick={toggleMenu}
                          >
                            Shop
                          </Link>
                          <Link
                            href="/cart"
                            className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                            onClick={toggleMenu}
                          >
                            Cart ({mounted ? totalItems() : 0})
                          </Link>

                          <>
                            <Link
                              href="/dashboard"
                              className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                              onClick={toggleMenu}
                            >
                              Dashboard
                            </Link>
                            <Link
                              href="/dashboard/settings"
                              className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                              onClick={toggleMenu}
                            >
                              Settings
                            </Link>
                            <Link
                              href="/dashboard/wishlist"
                              className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                              onClick={toggleMenu}
                            >
                              Wishlist
                            </Link>
                          </>

                          <Link
                            href="/about"
                            className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                            onClick={toggleMenu}
                          >
                            About
                          </Link>
                        </div>
                      </div>
                    </motion.nav>

                    {/* Footer */}
                    {isAuthenticated && (
                      <div className="border-t p-4">
                        <button
                          onClick={() => {
                            logout();
                            toggleMenu();
                          }}
                          className="w-full px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg text-center"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

// Icons
const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const CartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
