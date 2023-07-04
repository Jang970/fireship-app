import { firestore, auth, increment } from "../lib/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import { useEffect, useState } from "react";

export default function Heart({ postRef }: any) {
  const heartRef = postRef.collection("hearts").doc(auth.currentUser.uid);
  // const [heartDoc, loading] = useDocument(heartRef);

  const [heartDoc, setHeartDoc]: any = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeart = async () => {
      const doc = await heartRef.get();
      setHeartDoc(doc);
      setLoading(false);
    };
    fetchHeart();
  }, [heartRef]);

  const addHeart = async () => {
    const uid = auth.currentUser.uid;
    const batch = firestore.batch();

    batch.update(postRef, { heartCount: increment(1) });
    batch.set(heartRef, { uid });

    await batch.commit();
  };

  const removeHeart = async () => {
    const batch = firestore.batch();

    batch.update(postRef, { heartCount: increment(-1) });
    batch.delete(heartRef);

    await batch.commit();
  };

  if (loading) {
    <Loader show={loading} />;
  }

  return heartDoc?.exists ? (
    <button onClick={removeHeart}>Unheart</button>
  ) : (
    <button onClick={addHeart}>Heart</button>
  );
}
