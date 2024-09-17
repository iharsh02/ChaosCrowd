import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";

export function Card({
  // profilePic,
  // name,
  // username,
  // content,
  // image,
  // likes,
  // comments,
  // retweets,
}) {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          <img className="h-10 w-10 rounded-full" src="/image.jpg" alt="pick" />
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-900">
              Harsh Thakur
            </div>
            <div className="text-sm text-gray-500">@senpai</div>
          </div>
        </div>
        <p className="mt-2 text-gray-800">hiii this is eample components</p>
        
          <img
            className="mt-2 rounded-2xl w-full"
            src="/image.jpg"
            alt="Tweet image"
          />
       
        <div className="mt-4 flex justify-between text-gray-500">
          <button className="flex items-center space-x-2 hover:text-green-500">
            <Repeat2 size={18} />
            <span>retweets</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-500">
            <Share size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
