<template>
  <ModalBase class="install-guide-modal" title="ホーム画面に追加" @close="onClose">
    <Grid gap="24px">
      <Label>
        ホーム画面に追加すると、アプリのようにフルスクリーンで起動できます。
      </Label>
      <FormGroup v-if="platform === 'ios'" title="iPhone / iPad（Safari）">
        <ol class="steps">
          <li>画面下部の<strong>共有</strong>ボタン（四角に↑のアイコン）をタップ</li>
          <li>メニューから<strong>「ホーム画面に追加」</strong>を選択</li>
          <li>右上の<strong>「追加」</strong>をタップ</li>
        </ol>
      </FormGroup>
      <FormGroup v-else title="Android（Chrome）">
        <ol class="steps">
          <li>画面右上の<strong>メニュー（︙）</strong>を開く</li>
          <li><strong>「アプリをインストール」</strong>または<strong>「ホーム画面に追加」</strong>を選択</li>
          <li>表示されたダイアログで<strong>「インストール」</strong>をタップ</li>
        </ol>
      </FormGroup>
    </Grid>
    <template #footer>
      <Button primary @click="onClose">閉じる</Button>
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import Button from '@/components/atoms/Button.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'
import FormGroup from '@/components/molecules/FormGroup.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'
import { dismissInstallGuide, getPlatform } from '@/utils/pwa'

const emit = defineEmits<{ (e: 'close'): void }>()

const platform = getPlatform()

const onClose = () => {
  dismissInstallGuide()
  emit('close')
}
</script>

<style scoped>
.steps {
  display: grid;
  gap: 12px;
  list-style: decimal;
  padding-left: 24px;
  line-height: 1.6;
}

strong {
  font-weight: bold;
}
</style>
