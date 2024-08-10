import React from 'react'
function Formlogin(props) {
  const {
    handleSetlastname,
    handleSetname,
    handleSetDoB,
    handleSetEmail,
    handleSetPhone,
    handleSetPoB,
    handleSetGender,
    handleSubmit,
  } = props;
  return (
    <div className="w-full h-full flex lg:justify-center items-center px-5 md:px-10 lg:px-0 py-5 md:py-0">
      <div className="w-full lg:w-[768px] px-5 pt-7 xl:pt-8 pb-5 xl:pb-6 rounded-lg shadow-lg border bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full flex justify-center items-center pb-2">
            <label className="text-[#2563EB] font-bold text-3xl block">
              ទម្រង់ចុះឈ្មោះ
            </label>
          </div>

          <div className=" space-y-2">
            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-5  *:lg:w-6/12">
              <div className=" space-y-1">
                <label className="block text-gray-900 font-medium">
                  នាមត្រកូល(last name)*
                </label>
                <input
                  required
                  onChange={({ target }) => handleSetlastname(target.value)}
                  className="w-full border-2 rounded-lg px-2 py-2 border-gray-200 outline-none focus:outline-none focus:border-blue-400 transition-all duration-300"
                  type="text"
                  placeholder="បញ្ចូលនាមត្រកូល"
                  alt=""
                />
              </div>

              <div className=" space-y-1">
                <label className="block text-gray-900 font-medium">
                  នាម(name)*
                </label>
                <input
                  required
                  onChange={({ target }) => handleSetname(target.value)}
                  className="w-full border-2 rounded-lg px-2 py-2 border-gray-200 outline-none focus:outline-none focus:border-blue-400 transition-all duration-300"
                  type="text"
                  placeholder="បញ្ចូលនាម"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-5  *:lg:w-6/12">
              <div className=" space-y-1">
                <label className="block text-gray-900 font-medium">
                  ថ្ងៃខែឆ្នាំកំណើត(date of birth) *
                </label>
                <input
                  required
                  onChange={({ target }) => handleSetDoB(target.value)}
                  className="w-full border-2 rounded-lg px-2 py-2 border-gray-200 outline-none focus:outline-none focus:border-blue-400 transition-all duration-300"
                  type="date"
                  placeholder=""
                  alt=""
                />
              </div>

              <div className=" space-y-1">
                <label className="block text-gray-900 font-medium">
                  ភេទ(sex) *
                </label>
                <select
                  onChange={({ target }) => handleSetGender(target.value)}
                  required
                  className="w-full border-2 rounded-lg px-2 py-2 border-gray-200 outline-none focus:outline-none focus:border-blue-400 transition-all duration-300"
                >
                  <option>ជ្រើសរើសភេទ</option>
                  <option value={"ស្រី"}>ស្រី</option>
                  <option value={"ប្រុស"}>ប្រុស</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-5  *:lg:w-6/12">
              <div className=" space-y-1">
                <label className="block text-gray-900 font-medium">
                  អ៊ីមែល(email)
                </label>
                <input
                  onChange={({ target }) => handleSetEmail(target.value)}
                  className="w-full border-2 rounded-lg px-2 py-2 border-gray-200 outline-none focus:outline-none focus:border-blue-400 transition-all duration-300"
                  type="email"
                  placeholder="បញ្ចូលអ៊ីមែល"
                  alt=""
                />
              </div>

              <div className=" space-y-1">
                <label className="block text-gray-900 font-medium">
                  លេខទូរស័ព្ទ(phone)
                </label>
                <input
                  onChange={({ target }) => handleSetPhone(target.value)}
                  className="w-full border-2 rounded-lg px-2 py-2 border-gray-200 outline-none focus:outline-none focus:border-blue-400 transition-all duration-300"
                  type="text"
                  placeholder="បញ្ចូលលេខទូរសព្ទ"
                  alt=""
                />
              </div>
            </div>

            <div className=" space-y-2">
              <label className="block text-gray-900 font-medium">
                ទីកន្លែងកំណើត(place of birth)
              </label>
              <textarea
                onChange={({ target }) => handleSetPoB(target.value)}
                className="w-full border-2 rounded-lg px-2 py-2 border-gray-200 h-28 outline-none focus:outline-none focus:border-blue-400 transition-all duration-300"
              ></textarea>
            </div>

            <div className="pt-2 space-x-3">
              <button className="border rounded-lg border-gray-200 px-3 py-1.5 focus:outline-none">
                បោះបង់
              </button>
              <button
                type="submit"
                className="border rounded-lg border-gray-200 px-4 py-1.5 bg-[#2563EB] focus:outline-none text-white"
              >
                រក្សាទុក
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formlogin
