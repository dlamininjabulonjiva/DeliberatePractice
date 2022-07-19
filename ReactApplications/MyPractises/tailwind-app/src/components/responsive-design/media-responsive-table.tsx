const MediaResponsiveTable = () => {
    return (
        <div>
            <div className="px-5 h-screen bg-gray-100">
                <h1 className="text-xl mb-2">Your Orders</h1>

                <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">No</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="bg-white">
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <a className="font-bold text-blue-500 hover:underline" href="#">1000</a>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Your perfect pack for everyday use and walks in the forest.</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">19/07/2022</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">R235</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <a className="font-bold text-blue-500 hover:underline" href="#">1001</a>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight and soft fabric for breathable and comfortable wearing.</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">19/07/2022</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">R208</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <a className="font-bold text-blue-500 hover:underline" href="#">1002</a>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">The color could be slightly different between on the screen and in practice.</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-red-200 rounded-lg bg-opacity-50">Cancelled</span>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">19/07/2022</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">R145</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-blue-500 font-bold hover:underline">#1000</a>
                            </div>
                            <div className="text-gray-500">19/07/2022</div>
                            <div>
                                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700">
                            Your perfect pack for everyday use and walks in the forest.
                        </div>
                        <div className="text-sm font-medium text-black">R235</div>
                    </div>

                    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-blue-500 font-bold hover:underline">#1001</a>
                            </div>
                            <div className="text-gray-500">19/07/2022</div>
                            <div>
                                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700">
                            Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight and soft fabric for breathable and comfortable wearing.
                        </div>
                        <div className="text-sm font-medium text-black">R208</div>
                    </div>

                    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-blue-500 font-bold hover:underline">#1002</a>
                            </div>
                            <div className="text-gray-500">19/07/2022</div>
                            <div>
                                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-red-200 rounded-lg bg-opacity-50">Cancelled</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700">
                            The color could be slightly different between on the screen and in practice.
                        </div>
                        <div className="text-sm font-medium text-black">R145</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MediaResponsiveTable;