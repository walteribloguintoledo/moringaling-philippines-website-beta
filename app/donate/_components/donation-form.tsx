
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CreditCard } from 'lucide-react';
import { PaymentInstructions } from './payment-instructions';

interface DonationFormData {
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  amount: number;
  paymentMethod: 'GCash' | 'QR_PH';
}

const suggestedAmounts = [500, 1500, 3000, 5000, 10000];

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationId, setDonationId] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'GCash' | 'QR_PH'>('GCash');
  const [customAmount, setCustomAmount] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<DonationFormData>({
    defaultValues: {
      paymentMethod: 'GCash'
    }
  });

  const watchAmount = watch('amount');

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit donation form');
      }

      setDonationId(result.donationId);
      setPaymentMethod(data.paymentMethod);
      
      toast({
        title: "Donation form submitted!",
        description: "Please follow the payment instructions below.",
      });

    } catch (error) {
      console.error('Donation form error:', error);
      toast({
        title: "Error submitting donation",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmountSelect = (amount: number) => {
    setValue('amount', amount);
    setCustomAmount(false);
  };

  const handleCustomAmount = () => {
    setCustomAmount(true);
    setValue('amount', 0);
  };

  // If donation is submitted, show payment instructions
  if (donationId) {
    return (
      <PaymentInstructions 
        donationId={donationId}
        paymentMethod={paymentMethod}
        amount={watchAmount}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Donor Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="donorName">Full Name *</Label>
            <Input
              id="donorName"
              {...register('donorName', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              placeholder="Enter your full name"
              className={errors.donorName ? 'border-red-500' : ''}
            />
            {errors.donorName && (
              <p className="text-sm text-red-600">{errors.donorName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="donorEmail">Email Address *</Label>
            <Input
              id="donorEmail"
              type="email"
              {...register('donorEmail', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              placeholder="Enter your email"
              className={errors.donorEmail ? 'border-red-500' : ''}
            />
            {errors.donorEmail && (
              <p className="text-sm text-red-600">{errors.donorEmail.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <Label htmlFor="donorPhone">Phone Number (Optional)</Label>
          <Input
            id="donorPhone"
            type="tel"
            {...register('donorPhone')}
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Donation Amount */}
      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Donation Amount</h3>
        
        {/* Suggested Amounts */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
          {suggestedAmounts.map((amount) => (
            <Button
              key={amount}
              type="button"
              variant={watchAmount === amount && !customAmount ? "default" : "outline"}
              className="h-12"
              onClick={() => handleAmountSelect(amount)}
            >
              ₱{amount.toLocaleString()}
            </Button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="space-y-2">
          <Button
            type="button"
            variant={customAmount ? "default" : "outline"}
            className="w-full"
            onClick={handleCustomAmount}
          >
            Enter Custom Amount
          </Button>
          
          {customAmount && (
            <div className="space-y-2">
              <Label htmlFor="amount">Amount in Philippine Peso (₱) *</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">₱</span>
                <Input
                  id="amount"
                  type="number"
                  min="100"
                  {...register('amount', { 
                    required: 'Amount is required',
                    min: { value: 100, message: 'Minimum donation amount is ₱100' },
                    max: { value: 100000, message: 'Maximum donation amount is ₱100,000' }
                  })}
                  placeholder="0.00"
                  className={`pl-8 ${errors.amount ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.amount && (
                <p className="text-sm text-red-600">{errors.amount.message}</p>
              )}
            </div>
          )}
          
          {!customAmount && !watchAmount && (
            <p className="text-sm text-red-600">Please select or enter a donation amount</p>
          )}
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
        
        <RadioGroup
          defaultValue="GCash"
          onValueChange={(value) => setValue('paymentMethod', value as 'GCash' | 'QR_PH')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
              <RadioGroupItem value="GCash" id="gcash" />
              <Label htmlFor="gcash" className="flex-1 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded w-8 h-8 flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">GCash</div>
                    <div className="text-sm text-gray-600">Mobile wallet payment</div>
                  </div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
              <RadioGroupItem value="QR_PH" id="qr_ph" />
              <Label htmlFor="qr_ph" className="flex-1 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-600 rounded w-8 h-8 flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">QR PH</div>
                    <div className="text-sm text-gray-600">InstaPay QR code payment</div>
                  </div>
                </div>
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || (!customAmount && !watchAmount)}
        className="w-full bg-green-600 hover:bg-green-700 h-12"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="mr-2 h-4 w-4" />
            Proceed to Payment Instructions
          </>
        )}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        You will receive payment instructions after submitting this form. 
        Your donation is secure and goes directly to our mission programs.
      </p>
    </form>
  );
}
