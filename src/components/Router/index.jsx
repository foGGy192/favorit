import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Layout} from "../Layout/index.jsx";
import { ReviewPage } from "../../pages/review.jsx";
import { QuestionPage } from "../../pages/About.jsx";
import { CatalogPage } from "../../pages/CatalogPage.jsx";
import { ContactsPage } from "../../pages/contactsPage.jsx"
import { ProductPage } from "../../pages/productPage.jsx";
import { MainPage } from "../../pages/main.jsx";
import { AssortimentPage } from "../../pages/assortimentPage.jsx";



const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Layout />,
	  children: [
		{
		  path: "/",
		  element: <MainPage />
		},
		{
		  path: "catalog",
		  element: <CatalogPage />
		},
		{
		  path: "catalog/:category",
		  element: <AssortimentPage />
		},
		{
		  path: "catalog/:category/product/:id",
		  element: <ProductPage />
		},
		{
		  path: "Review",
		  element: <ReviewPage />
		},
		{
		  path: "About",
		  element: <QuestionPage />
		},
		{
		  path: "product",
		  element: <ProductPage />
		},
		{
		  path: "product/:id",
		  element: <ProductPage />
		},
		{
		  path: "contacts",
		  element: <ContactsPage />
		},
	  ]
	},
  ]);


  


export const Router = () => {
	return (
			<>
				<RouterProvider router={router}/>
			</>
	);
};