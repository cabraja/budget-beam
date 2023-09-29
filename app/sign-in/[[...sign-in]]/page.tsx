import ClerkSpinner from "@/components/loading/ClerkSpinner";
import { SignIn, ClerkLoading } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex items-center justify-center mt-10 mb-5">
      <div className="flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center w-[80%]">
          <h2 className="font-extrabold text-center text-2xl lg:text-3xl w-full lg:w-[50%] mb-1">Get your finances in order with BudgetBeam!</h2>
          <p className="text-muted-foreground text-center font-light text-sm w-full lg:w-[60%]">Take control of your finances with our intuitive budgeting web app. Organize expenses, track income, and visualize your financial journey with ease – your financial goals are just a click away!</p>
        </div>
        <SignIn />

        <ClerkLoading>
          <ClerkSpinner />
        </ClerkLoading>
      </div>
    </div>
  );
}