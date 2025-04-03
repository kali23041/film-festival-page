import Image from "next/image"
import Link from "next/link"
import {
  Star,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
  Check,
  Heart,
  Calendar,
  Clock,
  Award,
  Users,
  Film,
  Mail,
  Globe,
  Phone,
  MapPinIcon,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FilmFestivalPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 shadow-sm sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="transition hover:opacity-80">
              <Image src="/filmfreeway-logo.png" alt="FilmFreeway" width={120} height={28} className="h-7 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            
            <Link
              href="#"
              className="text-gray-700 font-medium px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              Submit Now
            </Link>
          </div>
        </div>
      </header>

      {/* Festival Banner */}
      <div className="relative">
        <div className="h-72 md:h-80 w-full overflow-hidden">
          <Image
            src="/festival-collage.png"
            alt="Festival Collage"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-end -mt-24 relative z-10">
            <div className="bg-[#1a2b5e] p-4 mr-5 rounded-lg shadow-lg transform transition hover:scale-105">
              <div className="flex items-center justify-center h-28 w-28">
                <div className="text-white text-center">
                  <div className="text-red-500 text-3xl mb-1">●</div>
                  <div className="text-3xl font-bold">म</div>
                  <div className="text-[10px] mt-1 font-medium tracking-wide">MUMBA INTERNATIONAL FILM FESTIVAL</div>
                </div>
              </div>
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-6 text-shadow">
              Mumba International Film Festival
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-14 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="flex overflow-x-auto hide-scrollbar">
              <TabsTrigger value="about" className="px-5 py-4">About</TabsTrigger>
              <TabsTrigger value="rules" className="px-5 py-4">Rules</TabsTrigger>
              <TabsTrigger value="reviews" className="px-5 py-4">Reviews</TabsTrigger>
              <TabsTrigger value="photos" className="px-5 py-4">Photos</TabsTrigger>
            </TabsList>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col lg:flex-row">
                {/* Left Column - Festival Details */}
                <div className="w-full lg:w-2/3 pr-0 lg:pr-10">
                  <TabsContent value="about">
                    {/* Share This Event */}
                    <div className="mb-8 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Share this Event</h3>
                      <div className="flex space-x-3">
                        <button className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                          <Share2 className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="p-2.5 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                          <Facebook className="h-4 w-4 text-white" />
                        </button>
                        <button className="p-2.5 bg-blue-400 rounded-full hover:bg-blue-500 transition">
                          <Twitter className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Event Type */}
                    <div className="mb-8 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Event Type</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          Film Festival
                        </span>
                        <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          Film Market
                        </span>
                      </div>
                    </div>

                    {/* Now Running */}
                    <div className="mb-8 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Now Running</h3>
                      <div className="h-4"></div>
                    </div>

                    {/* Contact */}
                    <div className="mb-8 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Contact</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <Mail className="h-4 w-4 text-gray-600" />
                          </div>
                          <div className="text-gray-700">info@mumbafilmfestival.com</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <Globe className="h-4 w-4 text-gray-600" />
                          </div>
                          <div className="text-gray-700">
                            <p>National Film Archive of India, Law College Road</p>
                            <p className="text-blue-600 hover:underline">Mumba International Film Festival</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <Phone className="h-4 w-4 text-gray-600" />
                          </div>
                          <div className="text-gray-700">+91 9876543210</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <MapPinIcon className="h-4 w-4 text-gray-600" />
                          </div>
                          <div className="text-gray-700">
                            <p>National Film Archive of India</p>
                            <p>Law College Road</p>
                            <p>Pune, Maharashtra 411004</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Organizers */}
                    <div className="mb-8 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Organizers</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          <p>Mumba Film Society</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          <p>Film Heritage Foundation</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          <p>National Film Foundation</p>
                        </div>
                      </div>
                    </div>

                    {/* Venue and Location */}
                    <div className="mb-8 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Venue and Location</h3>
                      <div className="space-y-2 text-gray-700">
                        <p className="font-medium">National Film Archive of India</p>
                        <p className="text-sm text-gray-500">In association with:</p>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          <p>International Film Festival of India</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          <p>Maharashtra Film, Stage & Cultural Development Corp Ltd</p>
                        </div>
                      </div>
                    </div>

                    {/* Map */}
                    <div className="mb-8">
                      <div className="h-56 bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <Image
                          src="/map-placeholder.png"
                          alt="Map"
                          width={600}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">About the Festival</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Mumba Film Festival is a prestigious international film festival, a creative platform, and a global
                        platform for filmmakers, where they can showcase their work, enhance cultural exchange, and celebrate
                        the art of cinema. The festival aims to promote Indian and world cinema. The festival aims to celebrate
                        diverse forms of cinema from across the globe, bringing together filmmakers, actors, producers, and film
                        enthusiasts.
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        By bringing local and international talent, the festival strives to create opportunities for networking,
                        collaboration, and cultural exchange in the world of cinema. Through workshops, panel discussions, and
                        screenings across the festival weekend, we aim to foster a community of film lovers and creators who are
                        passionate about storytelling.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Ultimately, the festival aims to become a major cultural movement that not only celebrates cinema but
                        also promotes cultural understanding and fosters new talent and innovation in a global scale.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="rules">
                    {/* Awards & Prizes */}
                    <div className="mb-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-yellow-500" />
                        Awards & Prizes
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">All selected films will receive a laurel.</p>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="font-semibold text-gray-800">Jury Selection</p>
                          <p className="text-gray-600">1 / 3 for Feature category / $ ??</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="font-semibold text-gray-800">Audience Award</p>
                          <p className="text-gray-600">1 / 3 for Feature category / $ ??</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="font-semibold text-gray-800">2nd Best Film</p>
                          <p className="text-gray-600">Cash Prize / 1000+ Rs (18.84 USD)</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="font-semibold text-gray-800">3rd Best Film</p>
                          <p className="text-gray-600">Cash Prize / 500+ Rs (9.42 USD)</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="font-semibold text-gray-800">BEST CINEMATOGRAPHY</p>
                          <p className="text-gray-600">Cash Prize 5000+ Rs (94.24 USD)</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="font-semibold text-gray-800">BEST DOCUMENTARY</p>
                          <p className="text-gray-600">Cash Prize 5000+ Rs (94.24 USD)</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="font-semibold text-gray-800">BEST DIRECTOR</p>
                          <p className="text-gray-600">Cash Prize 5000+ Rs (94.24 USD)</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="font-semibold text-gray-800">Best Feature Film Award</p>
                          <p className="text-gray-600">GRAND PRIZE WINNER OF THE JURY: BEST FILM AWARD</p>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
                          <p className="font-semibold text-gray-800">BEST ACTOR FEMALE</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
                          <p className="font-semibold text-gray-800">BEST ACTOR MALE</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
                          <p className="font-semibold text-gray-800">BEST ANIMATION SHORT</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
                          <p className="font-semibold text-gray-800">BEST DOCUMENTARY SHORT</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
                          <p className="font-semibold text-gray-800">BEST EDITING</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
                          <p className="font-semibold text-gray-800">BEST EXPERIMENTAL FILM</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews">
                    {/* Reviews Section */}
                    <div className="mb-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 flex items-center">
                          <Users className="h-5 w-5 mr-2 text-gray-600" />7 Reviews
                        </h3>
                        <div className="flex">
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        </div>
                        <button className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
                          Review Festival
                        </button>
                      </div>

                      {/* Rating Categories */}
                      <div className="grid grid-cols-2 gap-6 mb-8 p-5 bg-gray-50 rounded-xl">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Overall Rating</span>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </div>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Communication</span>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Value</span>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Organization</span>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </div>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Networking</span>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Programming</span>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Reviews List */}
                      <div className="space-y-6">
                        {/* Review 1 */}
                        <div className="border-b border-gray-100 pb-6">
                          <div className="flex items-start mb-3">
                            <Image
                              src="/avatar-1.png"
                              alt="Avatar"
                              width={48}
                              height={48}
                              className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                            />
                            <div>
                              <p className="font-semibold text-gray-800">Suzanne Berger</p>
                              <p className="text-xs text-gray-500">Submitted: 11 Dec 2023</p>
                              <div className="flex mt-1">
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                              </div>
                            </div>
                          </div>
                          <div className="ml-16">
                            <p className="text-gray-700 mb-3">
                              "Excellent festival. We had a great time. Thank you for accepting my film!"
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center text-xs text-gray-500">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>2 months ago</span>
                              </div>
                              <button className="text-xs text-gray-500 flex items-center hover:text-gray-700 transition">
                                <Heart className="h-3 w-3 mr-1" />
                                <span>Helpful</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Review 2 */}
                        <div className="border-b border-gray-100 pb-6">
                          <div className="flex items-start mb-3">
                            <Image
                              src="/avatar-2.png"
                              alt="Avatar"
                              width={48}
                              height={48}
                              className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                            />
                            <div>
                              <p className="font-semibold text-gray-800">Toshiro Yamada</p>
                              <p className="text-xs text-gray-500">Submitted: 5 Dec 2023</p>
                              <div className="flex mt-1">
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                              </div>
                            </div>
                          </div>
                          <div className="ml-16">
                            <p className="text-gray-700 mb-3">
                              "We are happy and honored to be selected and loved seeing our film on the big screen!"
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center text-xs text-gray-500">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>3 months ago</span>
                              </div>
                              <button className="text-xs text-gray-500 flex items-center hover:text-gray-700 transition">
                                <Heart className="h-3 w-3 mr-1" />
                                <span>Helpful</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Response from Festival */}
                        <div className="ml-16 bg-blue-50 p-4 rounded-xl">
                          <div className="flex items-start mb-2">
                            <Image
                              src="/festival-logo-small.png"
                              alt="Festival"
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full mr-3 border-2 border-white shadow-sm"
                            />
                            <div>
                              <p className="font-semibold text-sm text-gray-800">Response from festival</p>
                              <p className="text-xs text-gray-500">2 months ago</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 ml-11">"Thank you for your review! ❤️"</p>
                        </div>

                        {/* Review 3 */}
                        <div className="border-b border-gray-100 pb-6">
                          <div className="flex items-start mb-3">
                            <Image
                              src="/avatar-3.png"
                              alt="Avatar"
                              width={48}
                              height={48}
                              className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                            />
                            <div>
                              <p className="font-semibold text-gray-800">Katerina Petrova</p>
                              <p className="text-xs text-gray-500">Submitted: 28 Nov 2023</p>
                              <div className="flex mt-1">
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <Star className="h-3.5 w-3.5 text-gray-300" />
                              </div>
                            </div>
                          </div>
                          <div className="ml-16">
                            <p className="text-gray-700 mb-3">"Great and warm gathering & atmosphere."</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center text-xs text-gray-500">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>3 months ago</span>
                              </div>
                              <button className="text-xs text-gray-500 flex items-center hover:text-gray-700 transition">
                                <Heart className="h-3 w-3 mr-1" />
                                <span>Helpful</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Response from Festival */}
                        <div className="ml-16 bg-blue-50 p-4 rounded-xl">
                          <div className="flex items-start mb-2">
                            <Image
                              src="/festival-logo-small.png"
                              alt="Festival"
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full mr-3 border-2 border-white shadow-sm"
                            />
                            <div>
                              <p className="font-semibold text-sm text-gray-800">Response from festival</p>
                              <p className="text-xs text-gray-500">3 months ago</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 ml-11">"Your feedback is valuable to us. Thanks! 🙏"</p>
                        </div>
                      </div>

                      {/* Pagination */}
                      <div className="flex justify-center mt-8">
                        <div className="inline-flex rounded-md shadow-sm">
                          <button className="px-3 py-2 text-sm font-medium bg-blue-600 text-white rounded-l-md hover:bg-blue-700 transition">
                            1
                          </button>
                          <button className="px-3 py-2 text-sm font-medium bg-white text-gray-700 border-t border-b border-r border-gray-200 hover:bg-gray-50 transition">
                            2
                          </button>
                          <button className="px-3 py-2 text-sm font-medium bg-white text-gray-700 border-t border-b border-r border-gray-200 rounded-r-md hover:bg-gray-50 transition">
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="photos">
                    {/* New Bento Grid Layout for Photos */}
                    <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
                      <div className="rounded-xl overflow-hidden col-span-2 row-span-2">
                        <Image
                          src="/festival-photo-1.png"
                          alt="Festival Photo"
                          width={600}
                          height={400}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden">
                        <Image
                          src="/festival-photo-2.png"
                          alt="Festival Photo"
                          width={300}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden">
                        <Image
                          src="/festival-photo-3.png"
                          alt="Festival Photo"
                          width={300}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden col-span-2">
                        <Image
                          src="/festival-photo-1.png"
                          alt="Festival Photo"
                          width={600}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden row-span-2">
                        <Image
                          src="/festival-photo-2.png"
                          alt="Festival Photo"
                          width={300}
                          height={400}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden">
                        <Image
                          src="/festival-photo-3.png"
                          alt="Festival Photo"
                          width={300}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </div>

                {/* Right Column - Submission Info */}
                <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                  <div className="sticky top-28">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl text-center mb-6 shadow-md transform transition hover:scale-105">
                      <button className="font-bold text-lg">Submit Now</button>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm mb-6">
                      <button className="w-full py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition mb-4 font-medium flex items-center justify-center">
                        <Heart className="h-4 w-4 mr-2" />
                        Add to List
                      </button>

                      <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-600" />
                        Dates & Deadlines
                      </h3>

                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">Opening Date</span>
                          <span className="font-medium">January 15, 2023</span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="font-semibold text-green-800">Regular</span>
                          <span className="font-semibold text-green-800">May 31, 2023</span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-green-800">Late Submission Date</span>
                          <span className="font-medium text-green-800">July 15, 2023</span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">Notification Date</span>
                          <span className="font-medium">August 1, 2023</span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">Event Date</span>
                          <span className="font-medium">October 15, 2023</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm mb-6">
                      <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Film className="h-4 w-4 mr-2 text-gray-600" />
                        Categories & Fees
                      </h3>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <span className="text-sm text-gray-700">Feature Film (70-90 Min)</span>
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>

                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <span className="text-sm text-gray-700">Short Film (Up to 30 Min)</span>
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>

                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <span className="text-sm text-gray-700">Documentary Film (Up to 60 Min)</span>
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>

                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <span className="text-sm text-gray-700">Animation (Any Length)</span>
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>

                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <span className="text-sm text-gray-700">Music Video (Up to 10 Min)</span>
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>
                      </div>

                      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 transition">
                        View all categories
                      </button>
                    </div>

                    {/* Festival Partners */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <h3 className="font-semibold text-gray-800 mb-4">Other Festivals You May Like</h3>

                      <div className="space-y-5">
                        <div className="flex items-start group">
                          <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-lg mr-3 overflow-hidden group-hover:shadow-md transition">
                            <Image
                              src="/partner-logo-1.png"
                              alt="Partner"
                              width={50}
                              height={50}
                              className="w-12 h-12 object-contain group-hover:scale-110 transition duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition">
                              CANNES INDIE SHORTS AWARDS
                            </h4>
                            <p className="text-xs text-gray-500">Marketing</p>
                          </div>
                        </div>

                        <div className="flex items-start group">
                          <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg mr-3 overflow-hidden group-hover:shadow-md transition">
                            <Image
                              src="/partner-logo-2.png"
                              alt="Partner"
                              width={50}
                              height={50}
                              className="w-12 h-12 object-contain group-hover:scale-110 transition duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition">
                              Mumbai Short Film Festival
                            </h4>
                            <p className="text-xs text-gray-500">Marketing</p>
                          </div>
                        </div>

                        <div className="flex items-start group">
                          <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg mr-3 overflow-hidden group-hover:shadow-md transition">
                            <Image
                              src="/partner-logo-3.png"
                              alt="Partner"
                              width={50}
                              height={50}
                              className="w-12 h-12 object-contain group-hover:scale-110 transition duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition">
                              NEW YORK INDIE SHORTS AWARDS
                            </h4>
                            <p className="text-xs text-gray-500">Marketing</p>
                          </div>
                        </div>

                        <div className="flex items-start group">
                          <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-lg mr-3 overflow-hidden group-hover:shadow-md transition">
                            <Image
                              src="/partner-logo-4.png"
                              alt="Partner"
                              width={50}
                              height={50}
                              className="w-12 h-12 object-contain group-hover:scale-110 transition duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition">
                              TORONTO SHORTS
                            </h4>
                            <p className="text-xs text-gray-500">Marketing</p>
                          </div>
                        </div>

                        <div className="flex items-start group">
                          <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg mr-3 overflow-hidden group-hover:shadow-md transition">
                            <Image
                              src="/partner-logo-5.png"
                              alt="Partner"
                              width={50}
                              height={50}
                              className="w-12 h-12 object-contain group-hover:scale-110 transition duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition">
                              International Film Festival
                            </h4>
                            <p className="text-xs text-gray-500">Marketing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6 md:mb-0">
              <Link href="#" className="hover:text-gray-900 transition">
                How It Works
              </Link>
              <Link href="#" className="hover:text-gray-900 transition">
                Browse Festivals
              </Link>
              <Link href="#" className="hover:text-gray-900 transition">
                Testimonials
              </Link>
              <Link href="#" className="hover:text-gray-900 transition">
                FilmFreeway Identity
              </Link>
              <Link href="#" className="hover:text-gray-900 transition">
                Help
              </Link>
              <Link href="#" className="hover:text-gray-900 transition">
                Contact
              </Link>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                <Facebook className="h-4 w-4 text-gray-600" />
              </Link>
              <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                <Twitter className="h-4 w-4 text-gray-600" />
              </Link>
              <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                <Instagram className="h-4 w-4 text-gray-600" />
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center mt-6">
            <p>© 2023 FilmFreeway</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

