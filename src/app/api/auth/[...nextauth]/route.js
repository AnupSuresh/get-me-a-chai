import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import connectDB from "@/db/connectDb";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import Users from "@/models/Users";
import Payment from "@/models/Payment";


export const authOptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // Passwordless / email sign in
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user user:email", // Request access to the email
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await connectDB();
      if (account.provider == "github") {
        console.log(email);
        const currentUser = await Users.findOne({ email: profile.email });
        if (!currentUser) {
          const newUser = await new Users({
            email: profile.email,
            username: profile.email.split("@")[0],
          });
          await newUser.save();
        }
        return true;
      }
    },

    // async signIn({ user, account, profile, email, credentials }) {
    //   if (account.provider === "github") {
    //     await mongoose.connect("mongodb://localhost:27017/chai");

    //     // Handle case where GitHub doesn't return an email
    //     const userEmail = email || (profile?.email ? profile.email : `no-email-${profile.id}@placeholder.com`);

    //     const currentUser = await Users.findOne({ email: userEmail });

    //     if (!currentUser) {
    //       const newUser = new Users({
    //         email: userEmail,
    //         username: userEmail.split("@")[0],
    //       });
    //       await newUser.save();
    //     }

    //     return true;
    //   }
    //   return false; // Prevent sign-in for other providers if needed
    // },

    async session({ session, user, token }) {
      const dbUser = await Users.findOne({ email: session.user.email });
      console.log(`${dbUser}`);
      session.user.name = dbUser.username;
      console.log(session)
      return session;
    },
  },
});

export { authOptions as GET, authOptions as POST };
