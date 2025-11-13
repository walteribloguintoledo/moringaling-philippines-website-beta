
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Copy, Download, ArrowLeft, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PaymentInstructionsProps {
  donationId: string;
  paymentMethod: 'GCash' | 'QR_PH';
  amount: number;
}

export function PaymentInstructions({ donationId, paymentMethod, amount }: PaymentInstructionsProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied to clipboard",
        description: `${field} has been copied to your clipboard.`,
      });
      
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please manually copy the information.",
        variant: "destructive",
      });
    }
  };

  const gcashDetails = {
    accountName: "Moringaling Philippines Foundation Inc.",
    accountNumber: "09171234567",
    qrCodeUrl: "https://static.abacusaicdn.net/images/73279df9-549e-4c83-9d42-b48696ad3418.png"
  };

  const qrPhDetails = {
    accountName: "Moringaling Philippines Foundation Inc.",
    accountNumber: "SA-123456789",
    qrCodeUrl: "https://static.abacusaicdn.net/images/c06731d1-4dfc-480a-8839-1a2c42738dc7.png"
  };

  const currentDetails = paymentMethod === 'GCash' ? gcashDetails : qrPhDetails;

  return (
    <div className="space-y-6">
      {/* Success Header */}
      <div className="text-center bg-green-50 rounded-lg p-6">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Donation Form Submitted!</h3>
        <p className="text-green-700">
          Thank you for your generous donation of <span className="font-bold">₱{amount?.toLocaleString()}</span>
        </p>
        <div className="mt-3">
          <Badge variant="secondary">
            Donation ID: {donationId}
          </Badge>
        </div>
      </div>

      {/* Payment Instructions */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              paymentMethod === 'GCash' ? 'bg-blue-600' : 'bg-purple-600'
            }`}>
              <span className="text-white text-sm font-bold">
                {paymentMethod === 'GCash' ? 'G' : 'Q'}
              </span>
            </div>
            {paymentMethod === 'GCash' ? 'GCash Payment Instructions' : 'QR PH Payment Instructions'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Step-by-step instructions */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Follow these steps:</h4>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                Open your {paymentMethod === 'GCash' ? 'GCash' : 'banking'} app on your mobile phone
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                {paymentMethod === 'GCash' 
                  ? 'Select "Send Money" and choose "Via Mobile Number"'
                  : 'Select "InstaPay" and choose "Send to Account"'
                }
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                Enter the account details below or scan the QR code
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                Enter the exact amount: <strong>₱{amount?.toLocaleString()}</strong>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                  5
                </span>
                In the message/reference field, enter your donation ID: <strong>{donationId}</strong>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                  6
                </span>
                Complete the payment and take a screenshot of the successful transaction
              </li>
            </ol>
          </div>

          {/* Account Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Account Details</h4>
              
              <div className="space-y-3">
                <div className="bg-white border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Account Name</div>
                      <div className="font-medium">{currentDetails.accountName}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(currentDetails.accountName, 'Account Name')}
                    >
                      {copiedField === 'Account Name' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">
                        {paymentMethod === 'GCash' ? 'Mobile Number' : 'Account Number'}
                      </div>
                      <div className="font-medium">{currentDetails.accountNumber}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(currentDetails.accountNumber, 'Account Number')}
                    >
                      {copiedField === 'Account Number' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Amount</div>
                      <div className="font-medium">₱{amount?.toLocaleString()}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(amount?.toString() || '', 'Amount')}
                    >
                      {copiedField === 'Amount' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Reference/Message</div>
                      <div className="font-medium">{donationId}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(donationId, 'Reference')}
                    >
                      {copiedField === 'Reference' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Or Scan QR Code</h4>
              <div className="bg-white border rounded-lg p-4 text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 bg-gray-100 rounded-lg">
                  <Image
                    src={currentDetails.qrCodeUrl}
                    alt={`${paymentMethod} QR Code`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Scan this QR code with your {paymentMethod === 'GCash' ? 'GCash' : 'banking'} app
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = currentDetails.qrCodeUrl;
                    link.download = `${paymentMethod}-QR-Code.png`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download QR Code
                </Button>
              </div>
            </div>
          </div>

          {/* Upload Proof */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <Upload className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Upload Payment Proof</h4>
                <p className="text-sm text-yellow-700 mb-3">
                  After completing your payment, please take a screenshot of the successful transaction 
                  and email it to us at{' '}
                  <a 
                    href={`mailto:sales@avasiaonline.com?subject=Donation Payment Proof - ${donationId}&body=Dear Moringaling Philippines Foundation,%0A%0AI have completed my donation payment of ₱${amount?.toLocaleString()} for Donation ID: ${donationId}.%0A%0APlease find the payment screenshot attached.%0A%0AThank you!`}
                    className="font-medium text-yellow-800 underline"
                  >
                    sales@avasiaonline.com
                  </a>
                  {' '}with the subject line "Donation Payment Proof - {donationId}".
                </p>
                <p className="text-xs text-yellow-600">
                  This helps us verify and process your donation quickly.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">What happens next?</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• We'll verify your payment within 1-2 business days</li>
              <li>• You'll receive a donation receipt via email</li>
              <li>• We'll send updates on how your donation is making a difference</li>
              <li>• For questions, contact us at sales@avasiaonline.com</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => window.location.reload()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Make Another Donation
            </Button>
            <Button
              asChild
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              <a href="/">
                Return to Homepage
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
