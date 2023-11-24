import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-[100vw] md:w-[70vw] xl:w-[54vw] min-h-screen flex-col items-center text-center justify-between gap-8">
      <h1 className=" text-xl ">
        Missed <span className="font-bold text-[#528D27]">$FROGE</span>? Here is
        your second chance.
      </h1>
      <div className="w-full relative overflow-hidden rounded-2xl ">
        <img
          src="/vingete.svg"
          alt="vingete"
          className="absolute w-full h-full z-10 top-0"
        />
        <video
          src="/background.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="z-0 p-[2px] bg-[#141414] w-full flex rounded-2xl">
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="text-center px-2 sm:px-0">
        AI is dope, the whole world is watching the GROK and Chat GPT rivalry.
        However, in my kingdom of DeFi, together you and I are a huge active
        community that has made pretty big memes many times...and we&apos;re
        about to do it again! <br className="flex" /> <br className="flex" />{" "}
        Let&apos;s fucking do it, Frogs!
      </p>
      <p className="break-words w-[95%]">0x0F2552695aB86b5B8276dD03F0e227DF849Fb058</p>
      <a
        className="bg-[#528D27] hover:bg-[#D9EA81] text-black ease-linear duration-100 transition-all px-4 py-2 rounded-xl"
        href="https://app.uniswap.org/#/swap?outputCurrency=0x0F2552695aB86b5B8276dD03F0e227DF849Fb058"
        target="_blank"
        rel="noopener noreferrer">
        FUCKING BUY
      </a>
      <p>Tokenomics</p>
      <p>Supply: 10,000,000,000</p>
      <p>Liquidity 100% (Uniswap V2)</p>
      <div className="flex sm:gap-10 gap-5">
        <p>NO PRESALE</p>
        <p>NO TEAM TOKENS</p>
        <p>NO TAX</p>
      </div>
      <a
        className="bg-[#528D27] hover:bg-[#D9EA81] text-black ease-linear duration-100 transition-all px-4 py-2 rounded-xl"
        href="https://t.me/ethereum_wtf"
        target="_blank"
        rel="noopener noreferrer">
        JOIN COMMUNITY
      </a>
      <p className="text-xs text-gray-200">COPYRIGHT © 2023 WTF</p>
    </main>
  );
}
