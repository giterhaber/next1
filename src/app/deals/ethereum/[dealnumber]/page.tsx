
import {FC} from "react";
import getData from './data'
//https://manaboss-default-rtdb.firebaseio.com/deals/.json

// function api<T>(url: 'https://manaboss-default-rtdb.firebaseio.com/deals/.json'): Promise<T> {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }

//             return response.json() as Promise<T>
//         })
// }



interface pageProps{
    params: {dealnumber: string} 

}

const page: FC<pageProps> = async ({params}) => {
    console.log(params)
    const data:Promise<Deal[]> = getData();
    const deals = await data; 
    console.log(deals)

    //console.log('ob: ', Object.entries(deals))

    //mag if else ka diri? para sa params?

    //----kaon sa 

    //push here

    const ob = Object.entries(deals).forEach( ([key,value]) => {
        console.log(key, value)
        //if value is = to params! then push
    })
    console.log(ob)

    console.log(deals.animalyawa)

    return     <>
    <link rel="stylesheet" href="https://www.nfttrader.io/_next/static/css/5c6a4edf4374cda7.css" />
    <div id="__next" data-reactroot="">
	<div className="false">
		<div
			className="flex items-center justify-center w-full h-[48px] relative z-[10000] bg-primary-dark-blue false false false">
			<div className="flex justify-between items-center">
				<div className="text-primary-white false false false">
					<div
						className="relative w-full overflow-hidden text-clip whitespace-nowrap flex items-center text-sm font-semibold w-[270px] h-[48px] sm:w-[610px] lg:w-[914px] xl:w-[1124px]">
						<div className="absolute marquee-0a13207f-3db7-43d1-98d2-8c43d6cc9d6a "
							title="Welcome to the new version of NFT Trader. Please, check our new Trading Center if you want to check posts and offers of the others traders.">
							Welcome to the new version of NFT Trader. Please, check our new
							Trading Center if you want to check posts and offers of the others
							traders.
						</div>
					</div>
				</div>
				<img
          src="/_next/static/media/close_white.ffb37162.svg"
          className="absolute right-[24px] cursor-pointer"
          width={12}
          height={12}
        />
      </div> 
			</div>
		</div>
		<header className="hidden bg-[transparent] lg:block sticky -top-[1px] w-full z-[9999]">
			<div
				className="flex bg-primary-blue relative z-10 px-[24px] h-[72px] transition-all justify-between items-center ">
				<div className="flex h-full items-center gap-x-[64px]">
					<img
          src="/_next/static/media/logo_negative.75c9307e.svg"
          className="w-[192px] cursor-pointer"
        />
					<nav className="flex h-full">
						<ul className="flex gap-x-[40px] h-full text-primary-white font-semibold hover:cursor-pointer">
							<li className="flex h-full items-center relative">
								<span className="flex h-full items-center hover:text-primary-yellow transition-colors duration-200 ease-in-out undefined">
                <a href="/trading-center">Trading Center</a>
              </span>
							</li>
							<li className="flex h-full items-center relative">
								<span className="flex h-full items-center hover:text-primary-yellow transition-colors duration-200 ease-in-out undefined">
                <a href="/loopz">Loopz</a>
              </span>
							</li>
							<li className="flex h-full items-center relative">
								<span>
                <span
                  className="flex h-full items-center hover:text-primary-yellow transition-colors duration-200 ease-in-out
              text-primary-white undefined"
                >
                  <a href="/deals">Deals</a>
                </span>
								</span>
							</li>
							<li className="flex h-full items-center relative">
								<span>
                <span
                  className="flex h-full items-center hover:text-primary-yellow transition-colors duration-200 ease-in-out
              text-primary-white undefined"
                >
                  Resources
                  <svg
                    width="8.66"
                    height={5}
                    viewBox="0 0 25 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-[4px]"
                  >
                    <path
                      d="M12.6699 19.8564L0.669922 6L24.6699 6L12.6699 19.8564Z"
                      fill="white"
                    />
                  </svg>
                </span>
								</span>
							</li>
						</ul>
					</nav>
				</div>
				<div>
					<div className="flex justify-between gap-x-[24px] h-[40px] relative">
						<div
							className="SearchBar_insideBorderColoredBg__8D81c flex items-center justify-between px-[3px] rounded-[100px] w-[200px] h-[40px] transition-all focus-within:w-[320px]">
							<input
              type="text"
              className="bg-[transparent] text-sm font-semibold text-primary-white w-[100%] outline-0 h-full rounded-[100px] pl-[8px] py-[14px] sm:pl-[20px]"
              placeholder="Search @username"
              defaultValue=""
            />
							<img
              src="/_next/static/media/search_white.5c0051ee.svg"
              className="mr-[12px]"
            />
          </div>
							<div
								className="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-4 py-2 gtm-connect-wallet py-3 h-full false ">
								<span className="false text-sm font-semibold" id="japjapconnect">
              Connect wallet
            </span>
							</div>
						</div>
					</div>
				</div>
		</header>
		<header className="block bg-primary-white sticky select-none top-0 w-full z-[9999] lg:hidden">
			<div className="flex relative z-10 justify-between items-center bg-primary-blue h-[72px] px-[16px]">
				<img
        src="/_next/static/media/logo_negative.75c9307e.svg"
        className="cursor-pointer"
        width={170}
        height={40}
      />
				<div className="flex items-center justify-center gap-x-[12px]">
					<div
						className="flex items-center justify-center w-[40px] h-[40px] rounded-full border-[1px] border-solid border-primary-white cursor-pointer">
						<img
            src="/_next/static/media/search_white.5c0051ee.svg"
            className="w-[15px]"
          />
        </div>
						<svg className="cursor-pointer" width={40} height={40} viewBox="0 0 24 24" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
								fill="white" />
							<g clipPath="url(#clip0_357_110)">
								<path d="M7.79993 9H16.1999V10.05H7.79993V9Z" fill="#2D00F7" />
								<path d="M7.79993 11.4502H16.1999V12.5002H7.79993V11.4502Z" fill="#2D00F7" />
								<path d="M16.1999 13.8998H7.79993V14.9498H16.1999V13.8998Z" fill="#2D00F7" />
							</g>
							<path fillRule="evenodd" clipRule="evenodd"
								d="M12 23.4C18.296 23.4 23.4 18.296 23.4 12C23.4 5.70395 18.296 0.6 12 0.6C5.70395 0.6 0.6 5.70395 0.6 12C0.6 18.296 5.70395 23.4 12 23.4ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
								fill="#2D00F7" />
							<defs>
								<clipPath id="clip0_357_110">
									<rect width="9.6" height="9.6" fill="white"
										transform="translate(7.19995 7.20001)" />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
		</header>
		<main>
			<div className="bg-primary-yellow">
				<div className="bg-primary-blue rounded-br-[88px] md:rounded-br-[264px] ">
					<div className="m-auto max-w-[95%] px-[16px] lg:px-[48px]">
						<div
							className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
							<div>
								<p
									className="text-3xl md:text-5xl py-[16px] text-primary-white font-semibold lg:pt-[80px]">
									Details of Deal #{params.dealnumber}  {deals.animalyawa}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center w-[100%] bg-primary-white">
					<div className="w-[100%] max-w-[1280px] py-[50px]">
						<div className="rounded-2xl rounded-tr-[0px] shadow-xl hover:shadow-2xl w-[100%]">
							<div className="bg-primary-yellow rounded-2xl rounded-tr-[0px]">
								<div
									className="flex flex-col justify-start gap-[40px] rounded-b-0 cursor-default rounded-tl-2xl rounded-tr-[40px] bg-primary-white p-6 md:p-[40px] md:pr-[48px] md:pb-[48px]">
									<div className="flex items-start md:items-center justify-between">
										<div
											className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center">
											<div className="flex items-center justify-center gap-4">
												<div className="relative  flex  items-center justify-start gap-4 ">
													<div
														className="rounded-full flex items-center w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]">
														<div className="block w-full h-full">
															<style dangerouslySetInnerHTML={{
                                __html:
                                  "\n                                .jazzicon-container-c94b4f4a-7d5f-40b0-8d7f-3bc8a76d149d {\n                                  width: 24px;\n                                  height: 24px;\n                                }\n\n                                .jazzicon-container-ea8b337e-63f7-4c80-aedf-85158e75fb20 {\n                                  display: none\n                                }\n\n                                @media(min-width : 640px) {\n                                  .jazzicon-container-c94b4f4a-7d5f-40b0-8d7f-3bc8a76d149d {\n                                    display: none;\n                                  }\n\n                                  .jazzicon-container-ea8b337e-63f7-4c80-aedf-85158e75fb20 {\n                                    display: flex;\n                                  }\n                                }\n                              "
                              }} />
															<div className="jazzicon-container-c94b4f4a-7d5f-40b0-8d7f-3bc8a76d149d">
                              <div
                                className="paper"
                                style={{
                                  borderRadius: "100%",
                                  display: "inline-block",
                                  margin: 0,
                                  overflow: "hidden",
                                  padding: 0,
                                  backgroundColor: "rgb(199, 20, 77)",
                                  height: 24,
                                  width: 24
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x={0}
                                  y={0}
                                  height={24}
                                  width={24}
                                >
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={24}
                                    width={24}
                                    transform="translate(3.0399357911097753 -6.7124795818874725) rotate(361.8 12 12)"
                                    fill="#fc7500"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={24}
                                    width={24}
                                    transform="translate(-2.9934224835313303 8.131754622273986) rotate(168.4 12 12)"
                                    fill="#01878c"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={24}
                                    width={24}
                                    transform="translate(-12.933635614202837 -17.312685073195773) rotate(250.2 12 12)"
                                    fill="#159af2"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={24}
                                    width={24}
                                    transform="translate(-10.556978606118998 23.656980376871676) rotate(275.0 12 12)"
                                    fill="#f19d02"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="jazzicon-container-ea8b337e-63f7-4c80-aedf-85158e75fb20">
                              <div
                                className="paper"
                                style={{
                                  borderRadius: "100%",
                                  display: "inline-block",
                                  margin: 0,
                                  overflow: "hidden",
                                  padding: 0,
                                  backgroundColor: "rgb(199, 20, 77)",
                                  height: 40,
                                  width: 40
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x={0}
                                  y={0}
                                  height={40}
                                  width={40}
                                >
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={40}
                                    width={40}
                                    transform="translate(5.066559651849626 -11.187465969812454) rotate(361.8 20 20)"
                                    fill="#fc7500"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={40}
                                    width={40}
                                    transform="translate(-4.9890374725522175 13.552924370456644) rotate(168.4 20 20)"
                                    fill="#01878c"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={40}
                                    width={40}
                                    transform="translate(-21.556059357004727 -28.85447512199295) rotate(250.2 20 20)"
                                    fill="#159af2"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={40}
                                    width={40}
                                    transform="translate(-17.594964343531664 39.42830062811946) rotate(275.0 20 20)"
                                    fill="#f19d02"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            className="hidden  rounded-full w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]"
                            style={{
                              backgroundImage: 'url("null")',
                              backgroundPosition: "center center",
                              backgroundSize: "cover"
                            }}
                          ></div>
                        </div>
                      </div>
                      <img
                        src="/_next/static/media/collection-swap-arrows.63e91421.svg"
                        className="sm:w-auto sm:h-auto"
                        width={24}
                        height={24}
                      />
                      <div className="relative  flex  items-center justify-start gap-4 ">
                        <div className="rounded-full flex items-center w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]">
                          <div className="block w-full h-full">
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n                                .jazzicon-container-825581d4-a99b-4e8a-b9a2-710a61ed618f {\n                                  width: 24px;\n                                  height: 24px;\n                                }\n\n                                .jazzicon-container-908e84d9-13ba-433d-8f84-0c453afd5b3d {\n                                  display: none\n                                }\n\n                                @media(min-width : 640px) {\n                                  .jazzicon-container-825581d4-a99b-4e8a-b9a2-710a61ed618f {\n                                    display: none;\n                                  }\n\n                                  .jazzicon-container-908e84d9-13ba-433d-8f84-0c453afd5b3d {\n                                    display: flex;\n                                  }\n                                }\n                              "
                              }}
                            />
                            <div className="jazzicon-container-825581d4-a99b-4e8a-b9a2-710a61ed618f">
                              <div
                                className="paper"
                                style={{
                                  borderRadius: "100%",
                                  display: "inline-block",
                                  margin: 0,
                                  overflow: "hidden",
                                  padding: 0,
                                  backgroundColor: "rgb(21, 148, 242)",
                                  height: 24,
                                  width: 24
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x={0}
                                  y={0}
                                  height={24}
                                  width={24}
                                >
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={24}
                                    width={24}
                                    transform="translate(2.6919976385943882 -4.000732967425142) rotate(458.4 12 12)"
                                    fill="#2462e1"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={24}
                                    width={24}
                                    transform="translate(-11.522594467237658 5.994263726614974) rotate(268.8 12 12)"
                                    fill="#f74401"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={24}
                                    width={24}
                                    transform="translate(-6.8071905594760675 22.110011910512533) rotate(117.3 12 12)"
                                    fill="#fc7c00"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={24}
                                    width={24}
                                    transform="translate(-20.687920456547104 18.602038690110742) rotate(280.5 12 12)"
                                    fill="#c71448"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="jazzicon-container-908e84d9-13ba-433d-8f84-0c453afd5b3d">
                              <div
                                className="paper"
                                style={{
                                  borderRadius: "100%",
                                  display: "inline-block",
                                  margin: 0,
                                  overflow: "hidden",
                                  padding: 0,
                                  backgroundColor: "rgb(21, 148, 242)",
                                  height: 40,
                                  width: 40
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x={0}
                                  y={0}
                                  height={40}
                                  width={40}
                                >
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={40}
                                    width={40}
                                    transform="translate(4.4866627309906475 -6.667888279041903) rotate(458.4 20 20)"
                                    fill="#2462e1"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={40}
                                    width={40}
                                    transform="translate(-19.204324112062764 9.99043954435829) rotate(268.8 20 20)"
                                    fill="#f74401"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={40}
                                    width={40}
                                    transform="translate(-11.345317599126778 36.85001985085422) rotate(117.3 20 20)"
                                    fill="#fc7c00"
                                  />
                                  <rect
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    height={40}
                                    width={40}
                                    transform="translate(-34.479867427578505 31.003397816851237) rotate(280.5 20 20)"
                                    fill="#c71448"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            className="hidden  rounded-full w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]"
                            style={{
                              backgroundImage: 'url("")',
                              backgroundPosition: "center center",
                              backgroundSize: "cover"
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <span className="font-regular text-sm text-primary-blue">
                        View on Etherscan
                      </span>
                      <img src="/_next/static/media/external-link.138689a9.svg" />
                    </div>
                  </div>
                  <img
                    src="/_next/static/media/X_blue.6aeb22e2.svg"
                    className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start justify-center sm:flex-row sm:items-center">
                      <div className="flex items-center justify-center mb-[16px] gap-x-[8px] sm:mb-[0px] sm:mr-[16px]">
                        <img
                          src="/_next/static/media/ETH.6bb4a518.svg"
                          className="w-[28px] h-[28px]"
                          data-for="trade-6940-1-tooltip"
                          data-tip="true"
                          currentitem="false"
                        />
                        <span className="text-sm font-semibold text-primary-blue bg-primary-white border-[1px] border-primary-blue border-solid py-1 px-4 rounded-full">
                          Direct Deal
                        </span>
                        <div className="flex justify-between items-center gap-x-[10px]">
                          <img
                            src="/_next/static/media/logo_primary_blue.0ac60e45.svg"
                            className="w-[20px] animate-spin"
                          />
                          <span className="text-primary-blue text-sm font-semibold">
                            Ongoing Deal
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-light text-primary-dark-blue rubik">
                        Tue Apr 16 2024 20:02
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden flex-col lg:flex-row lg:items-center lg:gap-0 items-start justify-between gap-8">
                  <div className="flex flex-col justify-center gap-[20px] lg:flex-row xl:gap-[40px]">
                    <div className="relative  flex  items-center justify-start gap-4 ">
                      <div className="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]">
                        <div className="block w-full h-full">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                              .jazzicon-container-dd958259-4ea3-4e89-865a-3d7fcf0f7fab {\n                                width: 32px;\n                                height: 32px;\n                              }\n\n                              .jazzicon-container-8b46571d-937b-4c0c-bbda-eb125cdf5c09 {\n                                display: none\n                              }\n\n                              @media(min-width : 640px) {\n                                .jazzicon-container-dd958259-4ea3-4e89-865a-3d7fcf0f7fab {\n                                  display: none;\n                                }\n\n                                .jazzicon-container-8b46571d-937b-4c0c-bbda-eb125cdf5c09 {\n                                  display: flex;\n                                }\n                              }\n                            "
                            }}
                          />
                          <div className="jazzicon-container-dd958259-4ea3-4e89-865a-3d7fcf0f7fab">
                            <div
                              className="paper"
                              style={{
                                borderRadius: "100%",
                                display: "inline-block",
                                margin: 0,
                                overflow: "hidden",
                                padding: 0,
                                backgroundColor: "rgb(199, 20, 77)",
                                height: 32,
                                width: 32
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x={0}
                                y={0}
                                height={32}
                                width={32}
                              >
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={32}
                                  width={32}
                                  transform="translate(4.0532477214797 -8.949972775849963) rotate(361.8 16 16)"
                                  fill="#fc7500"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={32}
                                  width={32}
                                  transform="translate(-3.991229978041774 10.842339496365314) rotate(168.4 16 16)"
                                  fill="#01878c"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={32}
                                  width={32}
                                  transform="translate(-17.24484748560378 -23.08358009759436) rotate(250.2 16 16)"
                                  fill="#159af2"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={32}
                                  width={32}
                                  transform="translate(-14.075971474825328 31.542640502495566) rotate(275.0 16 16)"
                                  fill="#f19d02"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="jazzicon-container-8b46571d-937b-4c0c-bbda-eb125cdf5c09">
                            <div
                              className="paper"
                              style={{
                                borderRadius: "100%",
                                display: "inline-block",
                                margin: 0,
                                overflow: "hidden",
                                padding: 0,
                                backgroundColor: "rgb(199, 20, 77)",
                                height: 40,
                                width: 40
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x={0}
                                y={0}
                                height={40}
                                width={40}
                              >
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={40}
                                  width={40}
                                  transform="translate(5.066559651849626 -11.187465969812454) rotate(361.8 20 20)"
                                  fill="#fc7500"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={40}
                                  width={40}
                                  transform="translate(-4.9890374725522175 13.552924370456644) rotate(168.4 20 20)"
                                  fill="#01878c"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={40}
                                  width={40}
                                  transform="translate(-21.556059357004727 -28.85447512199295) rotate(250.2 20 20)"
                                  fill="#159af2"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={40}
                                  width={40}
                                  transform="translate(-17.594964343531664 39.42830062811946) rotate(275.0 20 20)"
                                  fill="#f19d02"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div
                          className="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                          style={{
                            backgroundImage: 'url("null")',
                            backgroundPosition: "center center",
                            backgroundSize: "cover"
                          }}
                        ></div>
                      </div>
                      <div className="flex flex-col items-stretch justify-evenly">
                        <span className="font-semibold text-base font-semibold text-primary-dark-blue sm:text-lg">
                          @Men1n
                        </span>
                        <span className="rubik text-sm font-regular text-primary-gray">
                          0x51e2e203...c95ffccc7a
                        </span>
                      </div>
                    </div>
                    <img
                      src="/_next/static/media/dashed-line.108c130c.svg"
                      className="hidden lg:block"
                    />
                    <div className="relative  flex  items-center justify-start gap-4 ">
                      <div className="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]">
                        <div className="block w-full h-full">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                              .jazzicon-container-445d84b4-f13a-4a6b-89f3-7cb2dd8bfb5d {\n                                width: 32px;\n                                height: 32px;\n                              }\n\n                              .jazzicon-container-a9e23d98-aab0-4778-985e-bbc6e5de8068 {\n                                display: none\n                              }\n\n                              @media(min-width : 640px) {\n                                .jazzicon-container-445d84b4-f13a-4a6b-89f3-7cb2dd8bfb5d {\n                                  display: none;\n                                }\n\n                                .jazzicon-container-a9e23d98-aab0-4778-985e-bbc6e5de8068 {\n                                  display: flex;\n                                }\n                              }\n                            "
                            }}
                          />
                          <div className="jazzicon-container-445d84b4-f13a-4a6b-89f3-7cb2dd8bfb5d">
                            <div
                              className="paper"
                              style={{
                                borderRadius: "100%",
                                display: "inline-block",
                                margin: 0,
                                overflow: "hidden",
                                padding: 0,
                                backgroundColor: "rgb(21, 148, 242)",
                                height: 32,
                                width: 32
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x={0}
                                y={0}
                                height={32}
                                width={32}
                              >
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={32}
                                  width={32}
                                  transform="translate(3.589330184792517 -5.334310623233522) rotate(458.4 16 16)"
                                  fill="#2462e1"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={32}
                                  width={32}
                                  transform="translate(-15.363459289650208 7.992351635486631) rotate(268.8 16 16)"
                                  fill="#f74401"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={32}
                                  width={32}
                                  transform="translate(-9.076254079301423 29.480015880683375) rotate(117.3 16 16)"
                                  fill="#fc7c00"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={32}
                                  width={32}
                                  transform="translate(-27.583893942062804 24.80271825348099) rotate(280.5 16 16)"
                                  fill="#c71448"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="jazzicon-container-a9e23d98-aab0-4778-985e-bbc6e5de8068">
                            <div
                              className="paper"
                              style={{
                                borderRadius: "100%",
                                display: "inline-block",
                                margin: 0,
                                overflow: "hidden",
                                padding: 0,
                                backgroundColor: "rgb(21, 148, 242)",
                                height: 40,
                                width: 40
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x={0}
                                y={0}
                                height={40}
                                width={40}
                              >
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={40}
                                  width={40}
                                  transform="translate(4.4866627309906475 -6.667888279041903) rotate(458.4 20 20)"
                                  fill="#2462e1"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={40}
                                  width={40}
                                  transform="translate(-19.204324112062764 9.99043954435829) rotate(268.8 20 20)"
                                  fill="#f74401"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={40}
                                  width={40}
                                  transform="translate(-11.345317599126778 36.85001985085422) rotate(117.3 20 20)"
                                  fill="#fc7c00"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  height={40}
                                  width={40}
                                  transform="translate(-34.479867427578505 31.003397816851237) rotate(280.5 20 20)"
                                  fill="#c71448"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div
                          className="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                          style={{
                            backgroundImage: 'url("")',
                            backgroundPosition: "center center",
                            backgroundSize: "cover"
                          }}
                        ></div>
                      </div>
                      <div className="flex flex-col items-stretch justify-evenly">
                        <span className="font-semibold text-base font-semibold text-primary-dark-blue sm:text-lg">
                          <span className="text-primary-gray">
                            &lt;username not set&gt;
                          </span>
                        </span>
                        <span className="rubik text-sm font-regular text-primary-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 sm:gap-6">
                    <div className="flex items-center justify-center">
                      <div style={{ width: 64 }}>
                        <div
                          className="inline-block"
                          style={{ width: "21.3333px" }}
                        >
                          <div
                            className=" rounded-full"
                            style={{
                              width: 64,
                              height: 64,
                              backgroundImage:
                                'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                              backgroundPosition: "center center",
                              backgroundSize: "cover"
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <img src="/_next/static/media/collection-swap-arrows.63e91421.svg" />
                    <div className="flex items-center justify-center">
                      <div style={{ width: 64 }}>
                        <div
                          className="inline-block"
                          style={{ width: "21.3333px" }}
                        >
                          <div
                            className=" rounded-full"
                            style={{
                              width: 64,
                              height: 64,
                              backgroundImage:
                                'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAI8ipNM7MJ1GQZfU57rB7lIHmwMwNRkAERL6ptrip8WHpYAwrp94%252B9DskcQ125iz9UUk98lhlVUicLnc%252Bimo4vTVx4D9XcUaSlVwD91RmRUWj1%252FuGZMJGFDcVN9URXjchQ%253D%253D%3Fwidth%3D250")',
                              backgroundPosition: "center center",
                              backgroundSize: "cover"
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-8 px-6 md:px-[40px] md:pr-[48px] md:pb-[48px] pb-8 bg-primary-white rounded-b-2xl">
              <hr className="w-full h-[1px] bg-primary-gray opacity-40 border-0" />
              <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0">
                <p className="text-lg font-semibold text-primary-dark-blue m-0">
                  Initiator’s digital assets
                </p>
                <div className="relative  flex flex-row-reverse items-center justify-start gap-4 ">
                  <div className="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]">
                    <div className="block w-full h-full">
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                          .jazzicon-container-af8eade5-8844-4127-b6fd-b50f370337d5 {\n                            width: 32px;\n                            height: 32px;\n                          }\n\n                          .jazzicon-container-0a6fc712-ae43-481c-ae9d-01caa2dc738a {\n                            display: none\n                          }\n\n                          @media(min-width : 640px) {\n                            .jazzicon-container-af8eade5-8844-4127-b6fd-b50f370337d5 {\n                              display: none;\n                            }\n\n                            .jazzicon-container-0a6fc712-ae43-481c-ae9d-01caa2dc738a {\n                              display: flex;\n                            }\n                          }\n                        "
                        }}
                      />
                      <div className="jazzicon-container-af8eade5-8844-4127-b6fd-b50f370337d5">
                        <div
                          className="paper"
                          style={{
                            borderRadius: "100%",
                            display: "inline-block",
                            margin: 0,
                            overflow: "hidden",
                            padding: 0,
                            backgroundColor: "rgb(199, 20, 77)",
                            height: 32,
                            width: 32
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x={0}
                            y={0}
                            height={32}
                            width={32}
                          >
                            <rect
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              height={32}
                              width={32}
                              transform="translate(4.0532477214797 -8.949972775849963) rotate(361.8 16 16)"
                              fill="#fc7500"
                            />
                            <rect
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              height={32}
                              width={32}
                              transform="translate(-3.991229978041774 10.842339496365314) rotate(168.4 16 16)"
                              fill="#01878c"
                            />
                            <rect
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              height={32}
                              width={32}
                              transform="translate(-17.24484748560378 -23.08358009759436) rotate(250.2 16 16)"
                              fill="#159af2"
                            />
                            <rect
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              height={32}
                              width={32}
                              transform="translate(-14.075971474825328 31.542640502495566) rotate(275.0 16 16)"
                              fill="#f19d02"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="jazzicon-container-0a6fc712-ae43-481c-ae9d-01caa2dc738a">
                        <div
                          className="paper"
                          style={{
                            borderRadius: "100%",
                            display: "inline-block",
                            margin: 0,
                            overflow: "hidden",
                            padding: 0,
                            backgroundColor: "rgb(199, 20, 77)",
                            height: 40,
                            width: 40
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x={0}
                            y={0}
                            height={40}
                            width={40}
                          >
                            <rect
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              height={40}
                              width={40}
                              transform="translate(5.066559651849626 -11.187465969812454) rotate(361.8 20 20)"
                              fill="#fc7500"
                            />
                            <rect
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              height={40}
                              width={40}
                              transform="translate(-4.9890374725522175 13.552924370456644) rotate(168.4 20 20)"
                              fill="#01878c"
                            />
                            <rect
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              height={40}
                              width={40}
                              transform="translate(-21.556059357004727 -28.85447512199295) rotate(250.2 20 20)"
                              fill="#159af2"
                            />
                            <rect
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              height={40}
                              width={40}
                              transform="translate(-17.594964343531664 39.42830062811946) rotate(275.0 20 20)"
                              fill="#f19d02"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                      style={{
                        backgroundImage: 'url("null")',
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col items-stretch justify-evenly">
                    <span className="font-semibold text-base font-semibold text-primary-dark-blue text-right sm:text-lg">
                      @Men1n
                    </span>
                    <span className="rubik text-sm font-regular text-primary-gray">
                      0x51e2e203...c95ffccc7a
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/eab75b7936cba038bfbc20577615524a"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2390
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="8a492925-59d7-41c1-a8c0-5f281a5c01a4"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2390"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2390"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/98bac845e49aa2a4c3384f927a20ac14"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2391
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="48c52863-1b4d-4603-bdb1-f1d47bbe3660"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2391"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2391"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/4e29a6f4911f8d655fb5539fab450037"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2394
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="f44a0aad-a239-46fb-8a52-2d24e7950734"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2394"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2394"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/6dfcdf28ff220c9bc904a70a72278a0c"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2395
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="69103fb6-2cc8-4a58-a4be-223a5ce0803d"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2395"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2395"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/407e9cec119b8af7cb75bc11703b74cd"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2401
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="e12c1a9c-7a5e-4c02-838a-be2537d08b1f"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2401"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2401"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/c38da4d88b2ab2504a4e89b58810ca0e"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2402
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="6b28cb47-e2cb-4592-b56f-e13c8465324a"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2402"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2402"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/489340190d46649efa349d3a7818a344"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2404
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="a5fb6dcb-3caf-4727-bbc3-2fe6a33f959c"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2404"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2404"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/20e40f8a9099253f240e495d7454177a"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2405
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="9d3f09fc-4fa3-476c-abbb-d4d776995082"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2405"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2405"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 lg:gap-6">
                    <img
                      src="https://nft-cdn.alchemy.com/eth-mainnet/0b1d36385c5f931a9d1b8a27a8b1c3ed"
                      className="rounded-full"
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                      <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                        #2406
                      </span>
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <div
                          className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                          data-for="3ddaf0ea-e999-402e-94da-c394620fbd02"
                          data-tip="true"
                          currentitem="false"
                          style={{
                            backgroundImage:
                              'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuANjTEdw533NtWjhkD0JmidXL3JKCBJuAB7CT5SXjUSUPceVS7LWkRRSiducguWW6kWvZkHz6BfYBrdba1CHG9Bkf0Yjdi%252Fl5%252BHDCJjjJSMe0p6PmgKuHpOBjRmyEfKfmQw%253D%253D%3Fwidth%3D250")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center"
                          }}
                        >
                          <img
                            className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                            src="/_next/static/media/verified.f4b22063.svg"
                          />
                        </div>
                        <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                          Steady Stack Legends
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                      View on
                    </span>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <a
                        href="https://nfttrader.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2406"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/smile_small.b8a2081b.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                      <a
                        href="https://opensea.io/assets/ethereum/0x3a34d11dad0b063307ee118d8415b31842911448/2406"
                        target="_blank"
                      >
                        <img
                          src="/_next/static/media/opensea.db900e48.svg"
                          className="inline-block ml-0 md:ml-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <hr className="w-full h-[1px] bg-primary-gray opacity-40 border-0" />
              <img
                src="/_next/static/media/collection-swap-arrows.63e91421.svg"
                className="rotate-90"
              />
              <hr className="w-full h-[1px] bg-primary-gray opacity-40 border-0" />
            </div>
            <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0">
              <p className="text-lg font-semibold text-primary-dark-blue m-0">
                Counterparty’s digital assets
              </p>
              <div className="relative  flex flex-row-reverse items-center justify-start gap-4 ">
                <div className="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]">
                  <div className="block w-full h-full">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                        .jazzicon-container-3d9ce384-af55-43c8-910c-3b54d6f4eb26 {\n                          width: 32px;\n                          height: 32px;\n                        }\n\n                        .jazzicon-container-f63108aa-01af-4a13-b742-565843410e0f {\n                          display: none\n                        }\n\n                        @media(min-width : 640px) {\n                          .jazzicon-container-3d9ce384-af55-43c8-910c-3b54d6f4eb26 {\n                            display: none;\n                          }\n\n                          .jazzicon-container-f63108aa-01af-4a13-b742-565843410e0f {\n                            display: flex;\n                          }\n                        }\n                      "
                      }}
                    />
                    <div className="jazzicon-container-3d9ce384-af55-43c8-910c-3b54d6f4eb26">
                      <div
                        className="paper"
                        style={{
                          borderRadius: "100%",
                          display: "inline-block",
                          margin: 0,
                          overflow: "hidden",
                          padding: 0,
                          backgroundColor: "rgb(21, 148, 242)",
                          height: 32,
                          width: 32
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          height={32}
                          width={32}
                        >
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={32}
                            width={32}
                            transform="translate(3.589330184792517 -5.334310623233522) rotate(458.4 16 16)"
                            fill="#2462e1"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={32}
                            width={32}
                            transform="translate(-15.363459289650208 7.992351635486631) rotate(268.8 16 16)"
                            fill="#f74401"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={32}
                            width={32}
                            transform="translate(-9.076254079301423 29.480015880683375) rotate(117.3 16 16)"
                            fill="#fc7c00"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={32}
                            width={32}
                            transform="translate(-27.583893942062804 24.80271825348099) rotate(280.5 16 16)"
                            fill="#c71448"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="jazzicon-container-f63108aa-01af-4a13-b742-565843410e0f">
                      <div
                        className="paper"
                        style={{
                          borderRadius: "100%",
                          display: "inline-block",
                          margin: 0,
                          overflow: "hidden",
                          padding: 0,
                          backgroundColor: "rgb(21, 148, 242)",
                          height: 40,
                          width: 40
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          height={40}
                          width={40}
                        >
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={40}
                            width={40}
                            transform="translate(4.4866627309906475 -6.667888279041903) rotate(458.4 20 20)"
                            fill="#2462e1"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={40}
                            width={40}
                            transform="translate(-19.204324112062764 9.99043954435829) rotate(268.8 20 20)"
                            fill="#f74401"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={40}
                            width={40}
                            transform="translate(-11.345317599126778 36.85001985085422) rotate(117.3 20 20)"
                            fill="#fc7c00"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={40}
                            width={40}
                            transform="translate(-34.479867427578505 31.003397816851237) rotate(280.5 20 20)"
                            fill="#c71448"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                    style={{
                      backgroundImage: 'url("")',
                      backgroundPosition: "center center",
                      backgroundSize: "cover"
                    }}
                  ></div>
                </div>
                <div className="flex flex-col items-stretch justify-evenly">
                  <span className="font-semibold text-base font-semibold text-primary-dark-blue text-right sm:text-lg">
                    <span className="text-primary-gray">
                      &lt;username not set&gt;
                    </span>
                  </span>
                  <span className="rubik text-sm font-regular text-primary-gray" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[15px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-2 lg:gap-6">
                  <img
                    src="https://nft-cdn.alchemy.com/eth-mainnet/0e6d710d322b2c1514ae863376720385"
                    className="rounded-full"
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                    <span className="text-lg md:text-2xl font-semibold text-primary-dark-blue">
                      #136
                    </span>
                    <div className="flex-1 flex items-center justify-start gap-4">
                      <div
                        className="rounded-full relative w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] flex-none"
                        data-for="3e7ba77c-5cc8-40e1-9d71-42ef7ec74dc2"
                        data-tip="true"
                        currentitem="false"
                        style={{
                          backgroundImage:
                            'url("https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAI8ipNM7MJ1GQZfU57rB7lIHmwMwNRkAERL6ptrip8WHpYAwrp94%252B9DskcQ125iz9UUk98lhlVUicLnc%252Bimo4vTVx4D9XcUaSlVwD91RmRUWj1%252FuGZMJGFDcVN9URXjchQ%253D%253D%3Fwidth%3D250")',
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center"
                        }}
                      >
                        <img
                          className="absolute -bottom-[1px] -right-[3px] w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] "
                          src="/_next/static/media/verified.f4b22063.svg"
                        />
                      </div>
                      <span className="text-xs md:text-base font-semibold text-primary-dark-blue w-[200px]">
                        Steady Stack Titans
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible">
                    View on
                  </span>
                  <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                    <a
                      href="https://nfttrader.io/assets/ethereum/0x78e0e038347497ef2dea4ad61ab0bd2b86d38c58/136"
                      target="_blank"
                    >
                      <img
                        src="/_next/static/media/smile_small.b8a2081b.svg"
                        className="inline-block ml-0 md:ml-4"
                      />
                    </a>
                    <a
                      href="https://opensea.io/assets/ethereum/0x78e0e038347497ef2dea4ad61ab0bd2b86d38c58/136"
                      target="_blank"
                    >
                      <img
                        src="/_next/static/media/opensea.db900e48.svg"
                        className="inline-block ml-0 md:ml-4"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer className="flex flex-col w-full h-[auto] px-[16px] pt-[40px] bg-primary-blue justify-between items-center text-primary-white text-xs font-semibold relative z-[1] lg:px-[48px] lg:pt-[48px]">
    <div className="lg:flex lg:flex-row lg:items-start lg:w-full">
      <div className="w-full">
        <div className="flex flex-col items-center justify-start w-full lg:items-start">
          <img
            src="/_next/static/media/logo_negative.75c9307e.svg"
            className="w-[175px]"
          />
        </div>
        <div className="flex flex-col w-full mt-[16px] gap-y-[24px] lg:mt-[20px]">
          <p className="text-primary-white text-xl font-semibold text-center lg:text-left">
            The secure place where you can swap your digital assets, connect
            with other members and discover new market trends.
          </p>
          <div className="flex justify-center items-center gap-x-[18px] lg:justify-start">
            <a
              className=""
              href="https://discord.gg/q4gK9sqt6r"
              target="_blank"
            >
              <img
                src="/_next/static/media/default_white.ad8a72e3.svg"
                width={40}
              />
            </a>
            <a className="" href="https://x.com/nfttrader" target="_blank">
              <img
                src="/_next/static/media/default_white.7a037686.svg"
                width={40}
              />
            </a>
            <a
              className=""
              href="https://nfttrader.medium.com/"
              target="_blank"
            >
              <img
                src="/_next/static/media/default_white.e7306b7b.svg"
                width={40}
              />
            </a>
            <a className="" href="mailto:info@nfttrader.io" target="_blank">
              <img
                src="/_next/static/media/default_white.b2858421.svg"
                width={40}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-[40px] gap-y-[28px] lg:flex-row lg:w-full lg:justify-center lg:items-start lg:gap-x-[84px]">
        <div className="flex flex-col gap-y-[16px] text-center lg:items-start lg:justify-start">
          <a
            className=" LinkComponent_link__Fmrzl LinkComponent_white__AfM_q font-semibold cursor-pointer text-base font-semibold"
            target=""
            href="/trading-center"
          >
            Trading Center
          </a>
          <a
            className=" LinkComponent_link__Fmrzl LinkComponent_white__AfM_q font-semibold cursor-pointer text-base font-semibold"
            target=""
            href="/deals"
          >
            Deals
          </a>
          <a
            className=" LinkComponent_link__Fmrzl LinkComponent_white__AfM_q font-semibold cursor-pointer text-base font-semibold"
            target=""
            href="/how-to-trade"
          >
            How to trade
          </a>
        </div>
        <div className="flex flex-col gap-y-[16px] text-center lg:items-start lg:justify-start">
          <a
            className=" LinkComponent_link__Fmrzl LinkComponent_white__AfM_q font-semibold cursor-pointer text-base font-semibold"
            target=""
            href="/about-us"
          >
            About us
          </a>
          <a
            className=" LinkComponent_link__Fmrzl LinkComponent_white__AfM_q font-semibold cursor-pointer text-base font-semibold"
            target=""
            href="/faq"
          >
            FAQs
          </a>
          <a
            className=" LinkComponent_link__Fmrzl LinkComponent_white__AfM_q font-semibold cursor-pointer text-base font-semibold"
            target="_blank"
            href="https://nfttrader.io/blog/"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
    <div className="w-full lg:mt-[56px]">
      <div className="flex flex-col w-full mt-[40px] border-t-[1px] border-t-[#4c24ff] gap-y-[20px] mb-[32px] lg:pt-[24px] lg:justify-between lg:flex-row-reverse">
        <div className="flex gap-x-[12px] pt-[24px] items-center justify-center lg:justify-start lg:pt-[0]">
          <a
            className=" LinkComponent_link__Fmrzl LinkComponent_white__AfM_q font-semibold cursor-pointer "
            target=""
            href="/tos"
          >
            Terms of Service
          </a>
          <span className="text-[16px] text-primary-yellow">•</span>
          <a
            className=" LinkComponent_link__Fmrzl LinkComponent_white__AfM_q font-semibold cursor-pointer "
            target=""
            href="/privacy"
          >
            Privacy Policy
          </a>
          <span className="text-[16px] text-primary-yellow">•</span>
          <span className="cursor-pointer">
            <a
              href="#"
              className="iubenda-cs-preferences-link"
              data-iub-enabled={1}
            >
              <img
                style={{
                  width: "2rem",
                  display: "inline",
                  margin: "0 10px 0 0"
                }}
                src="data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 30 14' style='enable-background:new 0 0 30 14;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;%7d .st1%7bfill-rule:evenodd;clip-rule:evenodd;fill:%230066FF;%7d .st2%7bfill:%23FFFFFF;%7d .st3%7bfill:%230066FF;%7d %3c/style%3e%3cg%3e%3cg id='final---dec.11-2020_1_'%3e%3cg id='_x30_208-our-toggle_2_' transform='translate(-1275.000000, -200.000000)'%3e%3cg id='Final-Copy-2_2_' transform='translate(1275.000000, 200.000000)'%3e%3cpath class='st0' d='M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg id='final---dec.11-2020'%3e%3cg id='_x30_208-our-toggle' transform='translate(-1275.000000, -200.000000)'%3e%3cg id='Final-Copy-2' transform='translate(1275.000000, 200.000000)'%3e%3cpath class='st1' d='M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z'/%3e%3cpath id='x' class='st2' d='M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z'/%3e%3cpath id='y' class='st3' d='M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
              />
              Preferences
            </a>
          </span>
        </div>
        <div className="flex text-center justify-center items-center gap-x-[10px]">
          <span className="rubik">Salad Labs Inc. © 2024</span>
          <div className="relative">
            <button
              id="headlessui-menu-button-1"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <img
                src="/_next/static/media/us.98cbe6cc.png"
                className="w-[24px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div
    style={{
      position: "fixed",
      zIndex: 9999,
      top: 16,
      left: 16,
      right: 16,
      bottom: 16,
      pointerEvents: "none"
    }}
  />
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src='/js/japjap.js'></script>
</div>
</>
}

export default page