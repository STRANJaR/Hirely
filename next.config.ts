import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    // async headers() {
    //     return [
    //         {
    //             source: "/api/:path*",
    //             headers: [
    //                 {
    //                     key: "Access-Control-Allow-Origin",
    //                     value: process.env.NEXT_PUBLIC_API_URL || "*",
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Credentials",
    //                     value: "true",
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Methods",
    //                     value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    //                 },
    //             ],
    //         },
    //     ];
    // },
};

export default nextConfig;
