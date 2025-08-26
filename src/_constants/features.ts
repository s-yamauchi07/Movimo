import { Zap, Heart, Clock } from 'lucide-react-native'
import { featureType } from '../_types/welcome/featureType'

export const FEATURES: featureType[] = [
  {
    icon: Zap,
    title: '3ステップで見つかる',
    description: '気分やシチュエーション、誰と見るかを選ぶだけ。Movimoがぴったりの映画を提案します。'
  },
  {
    icon: Heart,
    title: 'AIによるレコメンド',
    description: 'あなたの希望に沿ってAIが映画を提案。迷わずすぐに観たい作品を選べます。'
  },
  {
    icon: Clock,
    title: 'おすすめの理由を表示',
    description: 'Movimoは「90分」「家族向け」「平日の夜に最適」など、提案ごとの理由をタグ付きで表示します。'
  },
]