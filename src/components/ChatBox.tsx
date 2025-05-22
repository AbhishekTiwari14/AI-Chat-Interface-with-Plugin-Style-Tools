import { useState } from "react"

export default function ChatBox() {
  const [inputQuery, setInputQuery] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputQuery(e.target.value)

    const textarea = e.target
    textarea.style.height = "auto"
    textarea.style.height = Math.min(textarea.scrollHeight, 96) + "px"
  }
  return (
    <section className="bg-slate-700 py-6 absolute bottom-10 w-3/4 md:w-1/2 rounded-xl">
      <textarea
        rows={1}
        className="w-full pl-8 pr-18 text-white rounded-2xl resize-none leading-6 focus:outline-none"
        placeholder="Ask Something..."
        style={{
          minHeight: "24px",
          maxHeight: "96px",
        }}
        value={inputQuery}
        onChange={handleInputChange}
      />
      {inputQuery.trim() && (
        <button className="absolute bottom-2.5 right-3 p-2.5 bg-blue-600 rounded-full hover:opacity-80 hover:cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            stroke-width="0.72"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        </button>
      )}
    </section>
  )
}
