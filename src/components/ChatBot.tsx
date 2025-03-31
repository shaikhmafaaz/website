
import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, 
  SendHorizontal, 
  X, 
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

type Message = {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Sample responses for common questions
const botResponses: Record<string, string[]> = {
  "default": [
    "Thank you for your message. How can I assist you with information about AKI'S POONA COLLEGE?",
    "I'd be happy to help with any questions about our programs, admissions, or campus facilities.",
    "Is there anything specific about our college you'd like to know more about?"
  ],
  "admission": [
    "Our admission process is now open for the upcoming academic year. You can apply through the 'Apply Now' button on our website.",
    "For admission requirements, you'll need academic transcripts, identification, and in some cases entrance exam scores.",
    "The admission deadline for most programs is July 15th. Early applications are recommended."
  ],
  "courses": [
    "We offer various undergraduate and graduate programs across Computer Science, Data Science, Business Administration, and Digital Arts & Media.",
    "All our courses are designed with industry input to ensure relevance and career readiness.",
    "You can explore specific course details in the 'Courses' section of our website."
  ],
  "fees": [
    "Tuition fees vary by program. Undergraduate programs range from ₹80,000 to ₹120,000 per year.",
    "We offer various scholarship opportunities based on merit and need.",
    "Payment can be made in installments, and we accept multiple payment methods."
  ],
  "campus": [
    "Our campus is located in Pune and features modern classrooms, labs, a library, sports facilities, and student housing.",
    "The campus is open for visitors Monday through Friday, 9am to 5pm. We recommend scheduling a campus tour.",
    "We have dedicated study areas, cafeterias, and recreational spaces for students."
  ],
  "faculty": [
    "Our faculty includes experienced professors and industry professionals who bring real-world knowledge to the classroom.",
    "Many of our professors are active researchers and publish regularly in academic journals.",
    "We maintain a low student-to-faculty ratio to ensure personalized attention."
  ]
};

// Helper function to get bot response
const getBotResponse = (message: string): string => {
  const lcMessage = message.toLowerCase();
  
  if (lcMessage.includes("admission") || lcMessage.includes("apply") || lcMessage.includes("application")) {
    return botResponses.admission[Math.floor(Math.random() * botResponses.admission.length)];
  } else if (lcMessage.includes("course") || lcMessage.includes("program") || lcMessage.includes("degree")) {
    return botResponses.courses[Math.floor(Math.random() * botResponses.courses.length)];
  } else if (lcMessage.includes("fee") || lcMessage.includes("tuition") || lcMessage.includes("cost") || lcMessage.includes("price")) {
    return botResponses.fees[Math.floor(Math.random() * botResponses.fees.length)];
  } else if (lcMessage.includes("campus") || lcMessage.includes("facility") || lcMessage.includes("building")) {
    return botResponses.campus[Math.floor(Math.random() * botResponses.campus.length)];
  } else if (lcMessage.includes("faculty") || lcMessage.includes("professor") || lcMessage.includes("teacher") || lcMessage.includes("staff")) {
    return botResponses.faculty[Math.floor(Math.random() * botResponses.faculty.length)];
  } else {
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  }
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! How can I help you with information about AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERECE?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        content: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="rounded-full w-14 h-14 shadow-lg bg-[#800000] hover:bg-[#5a0000]"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="sm:max-w-[420px] p-0 rounded-t-lg overflow-hidden">
          <SheetHeader className="bg-[#800000] text-white p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6" />
                <SheetTitle className="text-white m-0">College Assistant</SheetTitle>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-[#5a0000] hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </SheetHeader>
          
          <ScrollArea className="h-[400px] p-4 pb-20">
            <div className="flex flex-col space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-[#800000] text-white rounded-tr-none'
                        : 'bg-gray-100 dark:bg-gray-800 rounded-tl-none'
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-950 border-t">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-grow"
                disabled={isTyping}
              />
              <Button 
                onClick={handleSend} 
                disabled={!inputValue.trim() || isTyping}
                className="bg-[#800000] hover:bg-[#5a0000]"
              >
                <SendHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
