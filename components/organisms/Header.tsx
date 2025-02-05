"use client";

import Link from "next/link";
import { Button } from "../atoms/Button";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export const Header = () => {
  const { user, isAuthenticated, isSeller, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

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
            {isSeller ? (
              <Link
                href="/dashboard/seller"
                className="text-gray-600 hover:text-gray-900"
              >
                Seller Dashboard
              </Link>
            ) : (
              <Link href="/sell" className="text-gray-600 hover:text-gray-900">
                Start Selling
              </Link>
            )}
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/search" className="text-gray-600 hover:text-gray-900">
              <SearchIcon className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-gray-900">
              <CartIcon className="w-6 h-6" />
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <span className="mr-2">{user?.name}</span>
                  <ChevronDownIcon className="w-4 h-4" />
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
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile Settings
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

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/products"
                className="text-gray-600 hover:text-gray-900"
              >
                Shop
              </Link>
              {isSeller ? (
                <Link
                  href="/dashboard/seller"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Seller Dashboard
                </Link>
              ) : (
                <Link
                  href="/sell"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Start Selling
                </Link>
              )}
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link
                href="/search"
                className="text-gray-600 hover:text-gray-900"
              >
                Search
              </Link>
              <Link href="/cart" className="text-gray-600 hover:text-gray-900">
                Cart
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="text-left text-gray-600 hover:text-gray-900"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Button variant="primary" size="sm" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
              )}
            </nav>
          </div>
        )}
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
