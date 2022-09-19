import LayoutMain from 'layouts/layouts/layout-main';

const Convertor = () => {
    return (
        <LayoutMain>
            <div className="flex justify-center">
                <div className="max-w-4xl rounded overflow-hidden shadow-md mt-10">
                    <div className='m-2 px-20 py-10  flex-row'>
                        <div className='font-bold text-3xl mb-2 text-[#586380] flex justify-start '>
                            Quizlet to<div className='text-[#5A80FE]'>&nbsp;Studyfam&nbsp;</div>Converter
                        </div>
                        <form className='my-5'>
                            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                    </svg>

                                </div>
                                <input type="url" id="quizletURL" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste quizlet url" required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Spotling end */}
        </LayoutMain>
    );
}

export default Convertor;