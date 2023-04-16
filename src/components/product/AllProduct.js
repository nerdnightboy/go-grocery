import React from 'react'
import './AllProduct.css'
import ProductCard from './ProductCard'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'

const AllProduct = () => {
    const products = [
        {
            "productId": 1,
            "productName": "Product 1",
            "productDescription": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            "productImage": [
              {
                id: 1,
                image: image1,
              },
              {
                id: 2,
                image: image2,
              },
              {
                id: 3,
                image: image3,
              }
            ],
            "productCode": "P1",
            "productCategory": "Category 1",
            "productSubCategory": "Product Sub-Category 1",
            "productBrand": "Brand 1",
            "productColor": "Color 1",
            "productSize": "Size 1",
            "productWeight": "Weight 1",
            "productMaterial": "Material 1",
            "productQuantity": 5,
            "productUnit": "Unit 1",
            "productPrice": 100,
            "salesPrice": 80,
            "productDiscount": 20,
            "productDiscountType": "Percentage",
            "productTax": 20,
            "productTaxType": "Percentage",
            "productShippingCharge": 20,
            "productShippingTime": "2-5 Days",
            "productShippingTimeType": "Days",
            "productShippingLocation": "Location 1",
            "productShippingLocationType": "Country",
            "productShippingReturnPolicy": "Return Policy 1",
            "productShippingReturnPolicyType": "Days",
            "productShippingReturnPolicyDescription": "Return Policy Description 1",
            "productShippingReturnPolicyDescriptionType": "Days",
            "productReviews" : [
              {
                "reviewid": 1,
                "name" : "Satyam Sahu",
                "email" : "",
                "rating" : 5,
                "date" : "2023-01-04",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  
              },
              {
                "reviewid": 2,
                "name" : "Anupam Mittal",
                "email" : "",
                "rating" : 4,
                "date" : "2023-01-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance..",
  
              },
              {
                "reviewid": 3,
                "name" : "Ashneer Grover",
                "email" : "",
                "rating" : 3,
                "date" : "2023-02-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.. Lovely btw.",
  
              },
            ]
          },
          {
            "productId": 2,
            "productName": "Product 2",
            "productDescription": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            "productImage": [
              {
                id: 1,
                image: image3,
              },
              {
                id: 2,
                image: image2,
              },
              {
                id: 3,
                image: image1,
              }
            ],
            "productCode": "P1",
            "productCategory": "Category 1",
            "productSubCategory": "Product Sub-Category 1",
            "productBrand": "Brand 1",
            "productColor": "Color 1",
            "productSize": "Size 1",
            "productWeight": "Weight 1",
            "productMaterial": "Material 1",
            "productQuantity": 5,
            "productUnit": "Unit 1",
            "productPrice": 150,
            "salesPrice": 120,
            "productDiscount": 30,
            "productDiscountType": "Percentage",
            "productTax": 20,
            "productTaxType": "Percentage",
            "productShippingCharge": 20,
            "productShippingTime": "2-5 Days",
            "productShippingTimeType": "Days",
            "productShippingLocation": "Location 1",
            "productShippingLocationType": "Country",
            "productShippingReturnPolicy": "Return Policy 1",
            "productShippingReturnPolicyType": "Days",
            "productShippingReturnPolicyDescription": "Return Policy Description 1",
            "productShippingReturnPolicyDescriptionType": "Days",
            "productReviews" : [
              {
                "reviewid": 1,
                "name" : "Satyam Sahu",
                "email" : "",
                "rating" : 5,
                "date" : "2023-01-04",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  
              },
              {
                "reviewid": 2,
                "name" : "Anupam Mittal",
                "email" : "",
                "rating" : 4,
                "date" : "2023-01-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance..",
  
              },
              {
                "reviewid": 3,
                "name" : "Ashneer Grover",
                "email" : "",
                "rating" : 3,
                "date" : "2023-02-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.. Lovely btw.",
  
              },
            ]
          },
          {
            "productId": 3,
            "productName": "Product 3",
            "productDescription": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            "productImage": [
              {
                id: 1,
                image: image2,
              },
              {
                id: 2,
                image: image3,
              },
              {
                id: 3,
                image: image1,
              }
            ],
            "productCode": "P1",
            "productCategory": "Category 1",
            "productSubCategory": "Product Sub-Category 1",
            "productBrand": "Brand 1",
            "productColor": "Color 1",
            "productSize": "Size 1",
            "productWeight": "Weight 1",
            "productMaterial": "Material 1",
            "productQuantity": 5,
            "productUnit": "Unit 1",
            "productPrice": 1005,
            "salesPrice": 905,
            "productDiscount": 10,
            "productDiscountType": "Percentage",
            "productTax": 20,
            "productTaxType": "Percentage",
            "productShippingCharge": 20,
            "productShippingTime": "2-5 Days",
            "productShippingTimeType": "Days",
            "productShippingLocation": "Location 1",
            "productShippingLocationType": "Country",
            "productShippingReturnPolicy": "Return Policy 1",
            "productShippingReturnPolicyType": "Days",
            "productShippingReturnPolicyDescription": "Return Policy Description 1",
            "productShippingReturnPolicyDescriptionType": "Days",
            "productReviews" : [
              {
                "reviewid": 1,
                "name" : "Satyam Sahu",
                "email" : "",
                "rating" : 5,
                "date" : "2023-01-04",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  
              },
              {
                "reviewid": 2,
                "name" : "Anupam Mittal",
                "email" : "",
                "rating" : 4,
                "date" : "2023-01-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance..",
  
              },
              {
                "reviewid": 3,
                "name" : "Ashneer Grover",
                "email" : "",
                "rating" : 3,
                "date" : "2023-02-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.. Lovely btw.",
  
              },
            ]
          },
        {
            "productId": 4,
            "productName": "Product 4",
            "productDescription": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            "productImage": [
              {
                id: 1,
                image: image1,
              },
              {
                id: 2,
                image: image2,
              },
              {
                id: 3,
                image: image3,
              }
            ],
            "productCode": "P1",
            "productCategory": "Category 1",
            "productSubCategory": "Product Sub-Category 1",
            "productBrand": "Brand 1",
            "productColor": "Color 1",
            "productSize": "Size 1",
            "productWeight": "Weight 1",
            "productMaterial": "Material 1",
            "productQuantity": 5,
            "productUnit": "Unit 1",
            "productPrice": 100,
            "salesPrice": 80,
            "productDiscount": 20,
            "productDiscountType": "Percentage",
            "productTax": 20,
            "productTaxType": "Percentage",
            "productShippingCharge": 20,
            "productShippingTime": "2-5 Days",
            "productShippingTimeType": "Days",
            "productShippingLocation": "Location 1",
            "productShippingLocationType": "Country",
            "productShippingReturnPolicy": "Return Policy 1",
            "productShippingReturnPolicyType": "Days",
            "productShippingReturnPolicyDescription": "Return Policy Description 1",
            "productShippingReturnPolicyDescriptionType": "Days",
            "productReviews" : [
              {
                "reviewid": 1,
                "name" : "Satyam Sahu",
                "email" : "",
                "rating" : 5,
                "date" : "2023-01-04",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  
              },
              {
                "reviewid": 2,
                "name" : "Anupam Mittal",
                "email" : "",
                "rating" : 4,
                "date" : "2023-01-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance..",
  
              },
              {
                "reviewid": 3,
                "name" : "Ashneer Grover",
                "email" : "",
                "rating" : 3,
                "date" : "2023-02-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.. Lovely btw.",
  
              },
            ]
          },
          {
            "productId": 5,
            "productName": "Product 5",
            "productDescription": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            "productImage": [
              {
                id: 1,
                image: image3,
              },
              {
                id: 2,
                image: image2,
              },
              {
                id: 3,
                image: image1,
              }
            ],
            "productCode": "P1",
            "productCategory": "Category 1",
            "productSubCategory": "Product Sub-Category 1",
            "productBrand": "Brand 1",
            "productColor": "Color 1",
            "productSize": "Size 1",
            "productWeight": "Weight 1",
            "productMaterial": "Material 1",
            "productQuantity": 5,
            "productUnit": "Unit 1",
            "productPrice": 150,
            "salesPrice": 120,
            "productDiscount": 30,
            "productDiscountType": "Percentage",
            "productTax": 20,
            "productTaxType": "Percentage",
            "productShippingCharge": 20,
            "productShippingTime": "2-5 Days",
            "productShippingTimeType": "Days",
            "productShippingLocation": "Location 1",
            "productShippingLocationType": "Country",
            "productShippingReturnPolicy": "Return Policy 1",
            "productShippingReturnPolicyType": "Days",
            "productShippingReturnPolicyDescription": "Return Policy Description 1",
            "productShippingReturnPolicyDescriptionType": "Days",
            "productReviews" : [
              {
                "reviewid": 1,
                "name" : "Satyam Sahu",
                "email" : "",
                "rating" : 5,
                "date" : "2023-01-04",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  
              },
              {
                "reviewid": 2,
                "name" : "Anupam Mittal",
                "email" : "",
                "rating" : 4,
                "date" : "2023-01-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance..",
  
              },
              {
                "reviewid": 3,
                "name" : "Ashneer Grover",
                "email" : "",
                "rating" : 3,
                "date" : "2023-02-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.. Lovely btw.",
  
              },
            ]
          },
          {
            "productId": 6,
            "productName": "Product 6",
            "productDescription": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            "productImage": [
              {
                id: 1,
                image: image2,
              },
              {
                id: 2,
                image: image3,
              },
              {
                id: 3,
                image: image1,
              }
            ],
            "productCode": "P1",
            "productCategory": "Category 1",
            "productSubCategory": "Product Sub-Category 1",
            "productBrand": "Brand 1",
            "productColor": "Color 1",
            "productSize": "Size 1",
            "productWeight": "Weight 1",
            "productMaterial": "Material 1",
            "productQuantity": 5,
            "productUnit": "Unit 1",
            "productPrice": 1005,
            "salesPrice": 905,
            "productDiscount": 10,
            "productDiscountType": "Percentage",
            "productTax": 20,
            "productTaxType": "Percentage",
            "productShippingCharge": 20,
            "productShippingTime": "2-5 Days",
            "productShippingTimeType": "Days",
            "productShippingLocation": "Location 1",
            "productShippingLocationType": "Country",
            "productShippingReturnPolicy": "Return Policy 1",
            "productShippingReturnPolicyType": "Days",
            "productShippingReturnPolicyDescription": "Return Policy Description 1",
            "productShippingReturnPolicyDescriptionType": "Days",
            "productReviews" : [
              {
                "reviewid": 1,
                "name" : "Satyam Sahu",
                "email" : "",
                "rating" : 5,
                "date" : "2023-01-04",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  
              },
              {
                "reviewid": 2,
                "name" : "Anupam Mittal",
                "email" : "",
                "rating" : 4,
                "date" : "2023-01-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance..",
  
              },
              {
                "reviewid": 3,
                "name" : "Ashneer Grover",
                "email" : "",
                "rating" : 3,
                "date" : "2023-02-26",
                "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.. Lovely btw.",
  
              },
            ]
          },
    ]
  return (
    <div className='allproducts'>
        <h1>All Products</h1>
        <div className='products'>
            {
                products.map((item, index) => {
                    return(
                        <ProductCard data={item} key={index} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllProduct