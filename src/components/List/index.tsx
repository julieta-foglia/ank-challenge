import React from 'react';
import { DataList } from './styled';
import { JobItem } from 'types/jobItem';
import { CompanyItem } from 'types/companyItem';

interface ListProps {
    data: JobItem[] | CompanyItem[];
    renderItem: any;
}

const List: React.FC<ListProps> = ({ data, renderItem }: ListProps) => {
    return (
        <DataList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: { id: string }) => item.id}
        />
    );
};

export default List;
