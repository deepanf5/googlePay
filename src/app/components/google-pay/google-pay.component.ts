import { Component, OnInit } from '@angular/core';
import { GooglePayButtonModule } from "@google-pay/button-angular";

@Component({
  selector: 'app-google-pay',
  standalone: true,
  imports: [GooglePayButtonModule],
  templateUrl: './google-pay.component.html',
  styleUrl: './google-pay.component.scss'
})
export class GooglePayComponent implements OnInit{


  
  buttonColor = "black";
  buttonType = "buy";
  isCustomSize = false;
  buttonWidth = 240;
  buttonHeight = 40;
  paymentRequest:any
  
  
  
  ngOnInit(): void {
    this.paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example",
              gatewayMerchantId: "exampleGatewayMerchantId"
            }
          }
        }
      ],
      merchantInfo: {
        merchantId: "12345678901234567890",
        merchantName: "Demo Merchant"
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: "1.00",
        currencyCode: "USD",
        countryCode: "US"
      }
    };
  }

  onLoadPaymentData(event:any) {
    console.log("load payment data", event.detail);
  }

}
