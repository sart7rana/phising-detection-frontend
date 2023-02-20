import Head from "next/head";
import { Table, Button, Modal, ConfigProvider } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

export default function DashBoard() {
    const router = useRouter();
    const [activeDetails, setActiveDetails] = useState({
        url: "https://www.virustotal.com",
        ip: "192.168.1.1",
        hostingProvider: "Google LLC",
        originalDeposition: "Phishing",
        detectionDate: "2022-04-23",
        modalPredection: 40,
        probability: 80,
        communityScore: 22,
    });
    const [showModal, setShowModal] = useState(false)
    const [dataSource, setDataSource] = useState([
        {
            url: "https://www.a.com",
            ip: "192.168.1.1",
            hostingProvider: "Google LLC",
            originalDeposition: "Phishing",
            detectionDate: "2022-04-23",
            modalPredection: 10,
            probability: 20,
            communityScore: 56
        },
        {
            url: "https://www.b.com",
            ip: "192.168.1.1",
            hostingProvider: "Google LLC",
            originalDeposition: "Legitimate",
            detectionDate: "2022-04-23",
            modalPredection: 30,
            probability: 40,
            communityScore: 69
        },
        {
            url: "https://www.c.com",
            ip: "192.168.1.1",
            hostingProvider: "Google LLC",
            originalDeposition: "Phishing",
            detectionDate: "2022-04-23",
            modalPredection: 50,
            probability: 60,
            communityScore: 29,
        },
        {
            url: "https://www.d.com",
            ip: "192.168.1.1",
            hostingProvider: "Google LLC",
            originalDeposition: "Legitimate",
            detectionDate: "2022-04-23",
            modalPredection: 70,
            probability: 80,
            communityScore: 7
        },
        {
            url: "https://www.e.com",
            ip: "192.168.1.1",
            hostingProvider: "Google LLC",
            originalDeposition: "Phishing",
            detectionDate: "2022-04-23",
            modalPredection: 90,
            probability: 100,
            communityScore: 100
        },
    ])
    return <>
        <Head>
            <title>DashBoard | Sarthak Rana</title>
        </Head>
        <main className="bg-slate-100 min-h-screen pt-12 px-24">
            <Modal open={showModal} footer={null} width="750" centered onCancel={() => { setShowModal(false) }}>
                <main className="m-6 grid grid-cols-2 gap-4">
                    <div className="w-96 border flex flex-col gap-6 p-4">
                        <div className="">
                            <div className="text-black/60 font-bold">Source URL:</div>
                            <a href={activeDetails.url} className="">{activeDetails.url}</a>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="">
                                <div className="text-black/60 font-bold">IP Address:</div>
                                <a href={activeDetails.ip} className="">{activeDetails.ip}</a>
                            </div>
                            <div className="">
                                <div className="text-black/60 font-bold">Status:</div>
                                <div className="text-black/60 font-medium">{activeDetails.originalDeposition}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="">
                                <div className="text-black/60 font-bold">Location:</div>
                                <div className="text-black/60 font-medium">{activeDetails.detectionDate}</div>
                            </div>
                            <div className="">
                                <div className="text-black/60 font-bold">Domain:</div>
                                <div className="text-black/60 font-medium">{activeDetails.detectionDate}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="">
                                <div className="text-black/60 font-bold">Title:</div>
                                <div className="text-black/60 font-medium">{activeDetails.detectionDate}</div>
                            </div>
                            <div className="">
                                <div className="text-black/60 font-bold">First Submission:</div>
                                <div className="text-black/60 font-medium">{activeDetails.detectionDate}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="">
                                <div className="text-black/60 font-bold">Last Submission:</div>
                                <div className="text-black/60 font-medium">{activeDetails.detectionDate}</div>
                            </div>
                            <div className="">
                                <div className="text-black/60 font-bold">Scan Date:</div>
                                <div className="text-black/60 font-medium">{activeDetails.detectionDate}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-96 h-96 border"></div>
                    <div className="w-96 h-96 border"></div>
                    <div className="w-96 h-96 border"></div>
                </main>
            </Modal>
            <h1 className="text-6xl text-black/70 font-bold">Dashboard</h1>
            <div className="flex flex-row-reverse w-full mb-4">
                <ConfigProvider theme={{ token: { colorPrimary: "#0369a1" } }}>
                    <Button className="" type="primary" onClick={() => { router.push("/") }}><span className='px-8 font-bold'>Scan New URL</span></Button>
                </ConfigProvider>
            </div>
            <div className="p-8 bg-gradient-to-t from-sky-500 to-sky-700 my-6 rounded-lg flex text-white relative items-center divide-x-2 divide-slate-300/60">
                <div className="top-2 mr-8 left-4 bg-white p-4 text-black/60 text-2xl shadow-slate-500/50 font-bold rounded-xl shadow-md">
                    {activeDetails.communityScore}
                </div>
                <div className="flex gap-2 items-start flex-col w-full px-12">
                    <div className="text-2xl font-semibold text-white/90">URL:</div>
                    <a href={activeDetails.url} className="text-lg text-gray-100">{activeDetails.url}</a>
                </div>
                <div className="flex gap-2 items-start flex-col w-full px-12">
                    <div className="text-xl font-medium text-white/90">Model Predication:</div>
                    <div className="font-medium text-lg text-white/90">{activeDetails.modalPredection}</div>
                </div>
                <div className="flex gap-2 items-start flex-col w-full px-12">
                    <div className="text-xl font-medium text-white/90">Probability of the website being {activeDetails.originalDeposition}:</div>
                    <div className={`font-medium text-lg ${activeDetails.originalDeposition === "Legitimate" ? "text-green-500" : "text-red-400"}`}>{activeDetails.probability}</div>
                </div>
            </div>
            <div className="w-full">
                <Table
                    columns={[{
                        dataIndex: "url"
                        , title: "Source Url",
                        render: (data: String) => {
                            return <Link href={data} className="text-blue-400">{data}</Link>
                        }
                    },
                    { dataIndex: "ip", title: "IP Address" }

                        , { dataIndex: "hostingProvider", title: "Hosting Provider" },
                    {
                        dataIndex: "originalDeposition",
                        title: "Original Deposition",
                        render: (data: String) => { return <article className={`${data === "Legitimate" ? "text-green-500" : "text-red-400"}`}>{data}</article> }
                    },
                    {
                        dataIndex: "detectionDate",
                        title: "Detection Date"
                    },
                    {
                        dataIndex: "action",
                        title: "Action",
                        render: function (_, data) {
                            console.log(data);
                            return <div className="flex gap-4">
                                <Button onClick={() => { setActiveDetails(data) }}>Info</Button>
                                <Button onClick={() => { setShowModal(true) }}>Details</Button>
                            </div>
                        }
                    }
                    ]}
                    dataSource={dataSource}
                    tableLayout="fixed"
                ></Table>
            </div>
        </main>
    </>
}