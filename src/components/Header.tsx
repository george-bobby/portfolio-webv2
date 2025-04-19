import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
// Rename motion to m to avoid JSX namespace issues
import {
  Menu,
  X,
  Home,
  FolderKanban,
  BookOpen,
  User,
  Award,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import SmoothLink from "@/components/SmoothLink";
import { useIsMobile } from "@/utils/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isDesktop = !isMobile;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    // For anchor links on the home page
    if (path.includes('#') && location.pathname === '/') {
      return window.location.hash === path.split('#')[1] ? `#${path.split('#')[1]}` : false;
    }
    // For regular paths
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/projects", label: "Projects", icon: FolderKanban },
    // { path: "/research", label: "Research", icon: BookOpen },
    { path: "/certificates", label: "Certificates", icon: Award },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/about", label: "About", icon: User },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-lg"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-heading font-bold text-foreground relative group"
          >
            <span className="relative z-10">&lt;George/&gt;</span>
            <span className="absolute inset-x-0 bottom-0 h-2 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <m.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </m.div>
            </AnimatePresence>
          </Button>

          <AnimatePresence>
            {(isOpen || isDesktop) && (
              <m.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={`${isOpen ? "flex" : "hidden lg:flex"
                  } absolute lg:relative top-full left-0 w-full lg:w-auto bg-background/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none flex-col lg:flex-row items-center gap-8 p-6 lg:p-0 border-b lg:border-none border-border/50 shadow-lg lg:shadow-none`}
              >
                <m.div
                  className="flex flex-col lg:flex-row items-center gap-9"
                  variants={itemVariants}
                >
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <SmoothLink
                        key={item.path}
                        to={item.path}
                        className={`relative group flex items-center gap-2 text-base ${isActive(item.path)
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                          } transition-colors duration-300`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${isActive(item.path) ? "text-primary" : "group-hover:text-primary"
                          }`} />
                        <span className="relative">
                          {item.label}
                          <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`} />
                        </span>
                      </SmoothLink>
                    );
                  })}
                </m.div>

                <m.div
                  className="flex items-center gap-6"
                  variants={itemVariants}
                >
                  <Button
                    variant="default"
                    className="relative group overflow-hidden flex items-center gap-2"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/george-bobby/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
                      <span className="relative z-10">Connect</span>
                      <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>
                  </Button>
                </m.div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </m.nav>
  );
};

export default Navigation;