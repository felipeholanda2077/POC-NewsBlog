import DefaultLayout from '../layouts/Default/Default.layout';
import usePageTitle from '../core/hooks/usePageTitle';
import EditorsList from '../features/EditorsList.feature';

export default function EditoresListView() {
    usePageTitle('Lista de editores')
    return <DefaultLayout>
        <EditorsList />
    </DefaultLayout>
}