
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ name, description, price, duration, icon: Icon, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
        <CardHeader>
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          )}
          <CardTitle className="heading-font text-2xl">{name}</CardTitle>
          <CardDescription className="text-base leading-relaxed mt-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          {(duration || price) && (
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              {duration && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{duration}</span>
                </div>
              )}
              {price && (
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-semibold text-foreground">{price}</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="mt-auto">
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
            <Link to="/reservas">Reservar ahora</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
