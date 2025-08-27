import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { 
  Lightbulb, Users, FileText, Clock, UserPlus, 
  Trophy, Code, Rocket, Zap, Target 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { faqData } from '@/data/faqData';






interface FAQItem {
  id: number;
  number: string;
  icon: React.ElementType;
  question: string;
  answer: string;
  color: string;
}



export const FAQSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // Pagination setup
  const itemsPerPage = 10;
  const totalPages = Math.ceil(faqData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = faqData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setExpandedId(null); // Collapse any open FAQ when changing pages
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Pagination Controls */}
      <div className="flex items-center justify-between mb-8 p-4 rounded-lg bg-gradient-to-r from-card/80 to-card/50 border border-border/30 backdrop-blur-sm">
        <div className="flex space-x-3">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={cn(
              "px-4 py-2 rounded-md font-f1 font-bold text-sm transition-all",
              currentPage === 1
                ? "bg-muted text-muted-foreground cursor-not-allowed" 
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            PREV
          </button>
          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={cn(
              "px-4 py-2 rounded-md font-f1 font-bold text-sm transition-all",
              currentPage === totalPages
                ? "bg-muted text-muted-foreground cursor-not-allowed" 
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            NEXT
          </button>
        </div>
        <div className="font-f1 text-foreground">
          LAP <span className="text-primary">{currentPage}</span> / {totalPages}
        </div>
      </div>

      {/* FAQ Cards Grid */}
      <div className="grid gap-6 max-w-4xl mx-auto">
        {currentItems.map((faq, index) => {
          const IconComponent = faq.icon;
          const isExpanded = expandedId === faq.id;
          
          return (
            <div
              key={faq.id}
              className={cn(
                "group relative overflow-hidden rounded-lg transition-all duration-300",
                "hover:shadow-racing hover:scale-[1.02] cursor-pointer",
                "animate-fade-in"
              )}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
              onClick={() => setExpandedId(isExpanded ? null : faq.id)}
            >
              {/* Card Header */}
              <div className={cn(
                "relative p-6 bg-gradient-to-r from-card to-card/50",
                "border border-border/50 backdrop-blur-sm",
                "hover:border-primary/30 transition-all duration-300"
              )}>
                {/* Position Number */}
                <div className={cn(
                  "absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center",
                  "font-f1 font-bold text-lg text-background shadow-lg",
                  faq.color
                )}>
                  {faq.number}
                </div>

                {/* Category Icon */}
                <div className="absolute top-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Question */}
                <div className="pl-16 pr-12">
                  <h3 className="text-lg font-f1 font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                </div>

                {/* Expand Indicator */}
                <div className="absolute bottom-4 right-4">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>

                {/* Racing Glow Effect */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
                  "bg-gradient-to-r",
                  faq.color.includes('red') && "from-f1-red/20 to-transparent",
                  faq.color.includes('orange') && "from-f1-orange/20 to-transparent",
                  faq.color.includes('teal') && "from-f1-teal/20 to-transparent",
                  faq.color.includes('green') && "from-f1-green/20 to-transparent",
                  faq.color.includes('blue') && "from-f1-blue/20 to-transparent"
                )} />
              </div>

              {/* Expandable Answer */}
              {isExpanded && (
                <div className="px-6 pb-6 bg-secondary/30 border-t border-border/30 animate-slide-expand">
                  <div className="pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Status Footer */}
      <div className="mt-16 p-6 rounded-lg bg-gradient-to-r from-card/80 to-card/50 border border-border/30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-f1 font-bold text-lg text-foreground mb-2">
              RACING STATUS: ACTIVE
            </h3>
            <p className="text-muted-foreground">
              All systems operational • Grid positions available • Next race starts soon
            </p>
          </div>
          <div className="w-4 h-4 bg-f1-green rounded-full animate-racing-pulse shadow-glow" />
        </div>
      </div>
    </div>
  );
};