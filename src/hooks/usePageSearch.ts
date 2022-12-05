import { ref } from "vue";
import PageContent from "@/components/page-content";

export function usePageSearch<T = any>() {
    const pageContentRef = ref<InstanceType<typeof PageContent>>();

    const handleQueryClick = (queryInfo: T) => {
        pageContentRef.value?.getPageData(queryInfo);
    };

    const handleResetClick = () => {
        pageContentRef.value?.getPageData();
    };
    return { pageContentRef, handleResetClick, handleQueryClick };
}
