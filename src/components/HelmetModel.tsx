// components/HelmetModel.tsx
import { useGLTF } from '@react-three/drei'

export function HelmetModel(props: any) {
  const gltf = useGLTF('/models/helmet.glb')
  return <primitive object={gltf.scene} {...props} />
}
