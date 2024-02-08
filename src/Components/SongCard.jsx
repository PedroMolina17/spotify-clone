import { useEffect, useState } from "react";

const SongCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=20&numberOfTopResults=5";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e7692f7f76msh4d79e254332bad8p1b3359jsn0aa348543e4b",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.albums && result.tracks.items) {
          setData(result.tracks.items);
        } else {
          console.error(
            "La propiedad 'albums' o 'items' no está definida en la respuesta."
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col text-[#a9a9a9] overflow-hidden">
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
