import chowder from "@/assets/dish-chowder.jpg";
import wings from "@/assets/dish-wings.jpg";
import calamari from "@/assets/dish-calamari.jpg";
import skins from "@/assets/dish-skins.jpg";
import ribeye from "@/assets/dish-ribeye.jpg";
import burger from "@/assets/dish-burger.jpg";
import chicken from "@/assets/dish-chicken.jpg";
import ribs from "@/assets/dish-ribs.jpg";
import mac from "@/assets/dish-mac.jpg";
import scampi from "@/assets/dish-scampi.jpg";
import cheesecake from "@/assets/dish-cheesecake.jpg";
import pie from "@/assets/dish-pie.jpg";
import brownie from "@/assets/dish-brownie.jpg";
import oldf from "@/assets/dish-oldfashioned.jpg";
import wine from "@/assets/dish-wine.jpg";
import beer from "@/assets/dish-beer.jpg";

export type MenuCategory = "Starters" | "Mains" | "Pasta" | "Desserts" | "Cellar";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  image: string;
  popular?: boolean;
  discount?: number; // percent
}

export const CATEGORIES: ("All" | MenuCategory)[] = [
  "All", "Starters", "Mains", "Pasta", "Desserts", "Cellar",
];

export const MENU: MenuItem[] = [
  { id: "chowder", name: "New England Clam Chowder", description: "Slow-simmered with smoked bacon and fresh thyme.", category: "Starters", price: 12, image: chowder, popular: true },
  { id: "wings", name: "Buffalo Wings", description: "Crisp, fiery, with house blue cheese.", category: "Starters", price: 14, image: wings, discount: 15 },
  { id: "calamari", name: "Golden Calamari", description: "Lightly battered with lemon and marinara.", category: "Starters", price: 13, image: calamari },
  { id: "skins", name: "Loaded Potato Skins", description: "Cheddar, bacon, scallion, sour cream.", category: "Starters", price: 11, image: skins },
  { id: "ribeye", name: "Prime Ribeye", description: "16oz, dry-aged 28 days, herb butter.", category: "Mains", price: 42, image: ribeye, popular: true },
  { id: "burger", name: "The American Stack", description: "Double patty, aged cheddar, smoked bacon.", category: "Mains", price: 19, image: burger, popular: true, discount: 10 },
  { id: "chicken", name: "Southern Fried Chicken", description: "Buttermilk-brined with biscuits and gravy.", category: "Mains", price: 22, image: chicken },
  { id: "ribs", name: "Hickory BBQ Ribs", description: "Slow-smoked, bourbon glaze, cornbread.", category: "Mains", price: 28, image: ribs, popular: true },
  { id: "mac", name: "Cast-Iron Mac & Cheese", description: "Three cheeses, crisp herb crust.", category: "Pasta", price: 16, image: mac },
  { id: "scampi", name: "Shrimp Scampi Linguine", description: "Garlic, lemon, parsley, white wine.", category: "Pasta", price: 24, image: scampi, discount: 20 },
  { id: "cheesecake", name: "NY Cheesecake", description: "Strawberry compote, graham crust.", category: "Desserts", price: 10, image: cheesecake },
  { id: "pie", name: "Warm Apple Pie", description: "Cinnamon, vanilla bean ice cream.", category: "Desserts", price: 9, image: pie, popular: true },
  { id: "brownie", name: "Brownie Sundae", description: "Hot fudge, whipped cream, cherry.", category: "Desserts", price: 11, image: brownie },
  { id: "oldf", name: "Old Fashioned", description: "Bourbon, bitters, orange peel.", category: "Cellar", price: 14, image: oldf },
  { id: "wine", name: "Napa Cabernet", description: "Glass of bold California red.", category: "Cellar", price: 13, image: wine },
  { id: "beer", name: "Local Craft IPA", description: "Hop-forward, citrus finish.", category: "Cellar", price: 8, image: beer, discount: 25 },
];
