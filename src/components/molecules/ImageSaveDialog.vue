<template>
  <div class="image-save-dialog">
    <Grid class="card">
      <Label bold class="message">画像を作成しました</Label>
      <img :src="url" :alt="file.name" class="preview" />
      <Label v-if="error" error class="message">{{ error }}</Label>
      <Label v-else class="message">{{ hint }}</Label>
      <Flex justify="center" gap="16px">
        <Button @click="resolve()">閉じる</Button>
        <Button primary @click="onSave">保存</Button>
      </Flex>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { PropType, onBeforeUnmount, ref } from 'vue'
import Button from '@/components/atoms/Button.vue'
import Flex from '@/components/atoms/Flex.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'
import { canShareFile, downloadUrl } from '@/utils/image'

const props = defineProps({
  resolve: {
    type: Function as PropType<() => void>,
    required: true,
  },
  file: {
    type: Object as PropType<File>,
    required: true,
  },
})

const url = URL.createObjectURL(props.file)
const canShare = canShareFile(props.file)
const hint = canShare
  ? '「保存」から写真やファイルに保存できます。\n画像を長押ししても保存できます。'
  : '画像を長押ししても保存できます。'
const error = ref('')

// iOS Safari では、非同期処理を挟むとタップ操作の扱いが切れて
// navigator.share や a[download] が無視される。
// そのため画像の生成とは切り離し、このボタンのタップで直接呼び出す。
const onSave = async () => {
  error.value = ''
  if (!canShare) {
    // ダウンロード確認中に URL を破棄しないよう、ダイアログは開いたままにする
    downloadUrl(url, props.file.name)
    return
  }
  try {
    await navigator.share({ files: [props.file] })
    props.resolve()
  } catch (e) {
    const name = (e as Error | null)?.name
    // 共有メニューを閉じた場合（AbortError）や連打（InvalidStateError）はエラーにしない
    if (name === 'AbortError' || name === 'InvalidStateError') return
    error.value = '保存に失敗しました。\n画像を長押しして保存してください。'
  }
}

onBeforeUnmount(() => URL.revokeObjectURL(url))
</script>

<style scoped>
.image-save-dialog {
  align-items: center;
  background: var(--shadow);
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  overscroll-behavior: contain;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: inherit;
}

.card {
  background: var(--base-bg);
  border-radius: 4px;
  height: min-content;
  padding: 24px 16px 16px 16px;
  width: min(calc(100% - 32px), 480px);
}

.preview {
  border: 1px solid var(--gray);
  justify-self: center;
  max-height: calc(var(--vh, 1vh) * 50);
  max-width: 100%;
  object-fit: contain;
}

.message {
  text-align: center;
  white-space: pre-wrap;
}
</style>
