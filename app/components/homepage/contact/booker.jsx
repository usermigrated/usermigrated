"use client";

// import { BookerEmbed } from "@calcom/atoms";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Booker({ eventSlug, calUsername }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="15min"
    calLink="saad-dev-ginzwb/15min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
  />;
}