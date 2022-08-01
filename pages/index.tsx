import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import type { NextPage } from 'next'

function Model({url, ...props}){
  const { scene } = useGLTF(url)
  return <primitive object={scene} {...props} />
}

const MODELS = {
  Beech: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf',
  Lime: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf',
  Spruce: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf'
}

const Home: NextPage = () => {

  const { model } = useControls({ model: { value: 'Beech', options: Object.keys(MODELS) } })

  return (
    <>
      <div>Este arbol es { model.toLowerCase()}. vale?</div>
      <Canvas style={{ width:'100%', height:'100vh'}} camera={{ position: [-10, 10, 40], fov: 59}}>
        <hemisphereLight color='red' groundColor='blue' intensity={0.55} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <group position={[0, -10, 0]}>
          <Model position={[0,0.25,0]} url={MODELS[model]} />
          <ContactShadows scale={22} blur={11} far={22} />

        </group>
        <OrbitControls />




      </Canvas>

    </>
  )
}


export default Home
