import { useEffect, useState } from "react";

const SongCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTopTracks = async () => {
      const token =
        "BQDpVj1o2JiHMLP9khUygbeldf70CFos-czfWA4Gw9g33R6h3xbt6p71ezXmi7b1dT3Ja_YTZAfpDfpxLZdYrGrsJuEhtd0BYPAdP_M829p56cGK9Fhu0hJmVyXhWw06BTPiQscOZttxFFN2gKxEY9UPXgLK4Mj9shJDy28ybxkDn5wZWUNZBCjiR3YrSEWua7RnFJW32-KpOuh3Z0a6zUS8wpmQJePHHM34P4CvjywogV3bOf5HhGHMhQHG5-xzZMXiFIIBG1Mf8TG_br16";

      const res = await fetchWebApi(
        "v1/me/top/tracks?time_range=long_term&limit=5",
        "GET",
        null,
        token
      );

      return res.items;
    };

    const fetchTopTracks = async () => {
      try {
        const topTracks = await getTopTracks();
        setData(topTracks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopTracks();
  }, []); // Se eliminan las dependencias para evitar el cambio en cada renderizado

  const fetchWebApi = async (endpoint, method, body, token) => {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    return await res.json();
  };

  return (
    <div className="flex flex-col text-[#a9a9a9] overflow-hidden ">
      {data.map((tracks) => (
        <div key={tracks.data.uri}>
          <div className="flex py-2 px-1 items-center text-sm ">
            <div className="h-11 w-11 mr-3">
              <img
                src={tracks.data.albumOfTrack.coverArt.sources[1].url}
                className="rounded-md "
                style={{
                  width: "10",
                  height: "10",
                }}
              ></img>
            </div>
            <div className="flex flex-col ">
              <p className="font-bold text-white text-md">
                {" "}
                {tracks.data.name}
              </p>
              <p className="text-sm">Artistas</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongCard;
