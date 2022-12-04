import { ref } from "vue";
import PageContent from "@/components/page-content";

export function usePageSearch() {
    const pageContentRef = ref<InstanceType<typeof PageContent>>();

    const handleQueryClick = (queryInfo: any) => {
        (pageContentRef.value as any).getPageData(queryInfo);
    };

    const handleResetClick = (queryInfo: any) => {
        (pageContentRef.value as any).getPageData(queryInfo);
    };
    return [pageContentRef, handleResetClick, handleQueryClick];
}
