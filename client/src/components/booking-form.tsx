import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertBookingSchema } from "@shared/schema";
import { User, Baby } from "lucide-react";

interface BookingFormProps {
  t: (key: string) => string;
  language: 'es' | 'en';
  studentType: 'adult' | 'child';
  onClose: () => void;
}

const bookingFormSchema = insertBookingSchema.extend({
  email: z.string().email(),
});

export default function BookingForm({ t, language, studentType, onClose }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      language: language === 'es' ? 'english' : 'spanish',
      studentType: studentType,
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const createBooking = useMutation({
    mutationFn: async (data: z.infer<typeof bookingFormSchema>) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: language === 'es' ? "¡Reserva confirmada!" : "Booking confirmed!",
        description: language === 'es' 
          ? "Te contactaremos pronto para confirmar tu clase gratuita."
          : "We will contact you soon to confirm your free trial class.",
      });
      form.reset();
      onClose();
    },
    onError: (error) => {
      console.error('Booking error:', error);
      toast({
        title: language === 'es' ? "Error" : "Error",
        description: language === 'es' 
          ? "Hubo un problema al procesar tu reserva. Inténtalo de nuevo."
          : "There was a problem processing your booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const timeSlots = studentType === 'adult' 
    ? ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
    : ["16:00", "17:00", "18:00", "19:00"];

  const onSubmit = (data: z.infer<typeof bookingFormSchema>) => {
    const formattedDate = selectedDate?.toISOString().split('T')[0] || "";
    
    createBooking.mutate({
      ...data,
      preferredDate: formattedDate,
      preferredTime: selectedTime,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-passport-gray">
            {studentType === 'adult' ? <User size={24} /> : <Baby size={24} />}
            {studentType === 'adult' ? t('booking.discoveryClass') : t('booking.discoveryClassChildren')}
            <span className="text-sm font-normal">(50 Min)</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-passport-gray mb-3">
              {t('booking.selectDateTime')}
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border"
                />
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-700 text-sm mb-3">
                  {t('booking.availableTimes')}
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={selectedTime === time 
                        ? (studentType === 'adult' ? 'passport-blue text-white' : 'passport-orange text-white')
                        : 'hover:border-passport-blue hover:text-passport-blue'
                      }
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.name')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.email')}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t('form.email')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.phone')}</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder={t('form.phone')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.message')}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('form.message')} 
                        rows={3}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  {language === 'es' ? 'Cancelar' : 'Cancel'}
                </Button>
                <Button
                  type="submit"
                  disabled={createBooking.isPending || !selectedDate || !selectedTime}
                  className={`flex-1 ${
                    studentType === 'adult' 
                      ? 'passport-orange hover:bg-orange-600' 
                      : 'passport-blue hover:bg-blue-700'
                  } text-white`}
                >
                  {createBooking.isPending 
                    ? (language === 'es' ? 'Procesando...' : 'Processing...') 
                    : t('booking.confirmBooking')
                  }
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
