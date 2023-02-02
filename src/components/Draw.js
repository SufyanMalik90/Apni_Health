import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Blur, Canvas, Circle, ColorMatrix, DisplacementMap, Fill, Group, Image, LinearGradient, Paint, Path, RoundedRect, Shadow, Turbulence, useCanvasRef, useImage, vec } from "@shopify/react-native-skia";
import { useTheme } from "@react-navigation/native";



export default function Draw() {
  const [paths, setPaths] = useState([]);

  const pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: "#fff",
      };
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
      setPaths(newPaths);
    })
    .onUpdate((g) => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);
    const ref = useCanvasRef();
    useEffect(() => {
      setTimeout(() => {
        // you can pass an optional rectangle
        // to only save part of the image
        const image = ref.current?.makeImageSnapshot();
        if (image) {
          // you can use image in an <Image> component
          // Or save to file using encodeToBytes -> Uint8Array
          const bytes = image.encodeToBytes();
        
        }
      }, 1000)
    });
    const MyDrawing = () => {
        const { primary } = useTheme();
        return <Fill color={primary} />;
      };
      const width = 256;
const height = 256;
 
 const PaintDemo = () => {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;
  return (
    <Canvas style={{ width, height}}>
       <Circle c={c} r={r} color="red">
        <Paint color="lightblue" />
        <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
        <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
      </Circle>
    </Canvas>
  );
};
const image = useImage(require("../../assets/images/doc1.png"));

const r=width/10
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={pan}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          {/* <Canvas style={{ flex: 8 }}>
            {paths.map((p, index) => (
              <Path
                key={index}
                path={p.segments.join(" ")}
                strokeWidth={5}
                style="stroke"
                color={p.color}
              />
            ))}
          </Canvas> */}
              {/* <Canvas style={{ flex: 1 }} ref={ref}>
      <Circle r={50} cx={128} cy={150} color="red" />
    </Canvas> */}
<PaintDemo/>
<Canvas style={{ width, height }}>
      {/* <Group color="lightblue">
        <Circle cx={r} cy={r} r={r} />
        <Group style="stroke" strokeWidth={10}>
          <Circle cx={3 * r} cy={3 * r} r={r} />
        </Group>
      </Group> */}

      {/* <Group>
        <LinearGradient
          start={vec(2 * r, 2 * r)}
          end={vec(4 * r, 4 * r)}
          colors={["#0061ff", "#60efff"]}
        />
        <Circle cx={3 * r} cy={3 * r} r={r} />
      </Group> */}
     {/* {image && (
        <Image
          image={image}
          fit="contain"
          x={0}
          y={0}
          width={256}
          height={256}
        >
            <Blur blur={2} mode="clamp">
          <ColorMatrix
            matrix={[
              -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
              1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
            ]}
          />
        </Blur>

        </Image>
      )} */}
            {/* <Fill color="lightblue" />
      <RoundedRect x={32} y={32} width={192} height={192} r={32} color="lightblue">
        <Shadow dx={12} dy={12} blur={25} color="#93b8c4" />
        <Shadow dx={-12} dy={-12} blur={25} color="#c7f8ff" />
      </RoundedRect> */}
            <Image
        image={image}
        x={0}
        y={0}
        width={256}
        height={256}
        fit="cover"
      >
        <DisplacementMap channelX="r" channelY="b" scale={20}>
          <Turbulence freqX={0.05} freqY={0.05} octaves={2} seed={2} />
        </DisplacementMap>
      </Image>


    </Canvas>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}