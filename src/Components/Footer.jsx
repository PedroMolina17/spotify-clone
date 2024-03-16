import { useEffect, useState } from "react";

const Foooter = () => {
  const [data, setData] = useState([]);

  const fetchWebApi = async (endpoint, method, token) => {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      method,
      headers: {
        Authorization: ` Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    return await res.json();
  };

  useEffect(() => {
    const getTopTracks = async () => {
      const token =
        "BQAw3NuKD6aFggCj6AYHpTjegJn8q2hGt1BTBsdG8bGmFXdzszog50WPS6o9oGtoO678vLUTjtJrerc6418XNGKP9p10y5EeKe1I498jX9QleTrGl0B7XRsIkKIyv57xCZJOUiuR-pKu6C9zTqLuhKnMXu6g2_18vigx3kPmjhQ3nWSoAr2Q2mrCVTYsjxnEX0cULBmOgn2a1gCzFRrNyjCU5ejvgmL39hG_gS41j4Loxwth9Ke8L25_k66k4t_y8XDy0aVR2Gre6xfhBQKa";
      try {
        const res = await fetchWebApi(
          "v1/me/top/tracks?time_range=long_term&limit=5",
          "GET",
          token
        );

        setData(res.items);
      } catch (error) {
        console.error(error);
      }
    };

    getTopTracks();
  }, []);

  return (
    <div className="flex flex-col text-[#a9a9a9] overflow-hidden ">
      {console.log(
        data.map(
          ({ name, artists }) =>
            ` ${name} by ${artists.map((artist) => artist.name).join(", ")}`
        )
      )}
    </div>
  );
};

export default Foooter;
