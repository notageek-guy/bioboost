import ChatBox from "@/components/ChatBox";
import axios from "axios";
import Footer from "@/components/Footer";
import Result from "@/components/Result";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { notifier } from "@/helper/notify";
import { Toaster } from "react-hot-toast";
const Home: NextPage = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const memoizedPrompt = useMemo(() => prompt, [prompt]);

  const generate = async () => {
    setLoading(true);

    try {
      const data = await axios.post(
        "/api/gen",
        {
          prompt: prompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      notifier.success("Generated your bio successfully!");

      setResult(data.data.text);
    } catch (err) {
      console.log(err);
      notifier.error("Something went wrong!");
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      setResult("");
    };
  }, []);
  return (
    <div>
      <Head>
        <title>BioBoost</title>
        <meta name="description" content="OpenAi+Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen  bg-gradient-to-br from-black to-gray-800">
        <div className="p-4">
          <div className="max-w-[700px] mx-auto  p-4 ">
            <div className="flex flex-col items-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md shadow-md flex items-center gap-2 ">
                <FaGithub size={20} />
                <span>Star on Github</span>
              </button>
              <h1 className="text-5xl font-bold text-white text-center">
                Generate your next LinkedIn bio in seconds
              </h1>

              <div className="mt-4">
                <ChatBox
                  memoInp={memoizedPrompt}
                  handleInput={handleInput}
                  generate={generate}
                  loading={loading}
                />
                <Toaster />
                <Result result={result} loading={loading} />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
