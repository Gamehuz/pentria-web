import { useEffect, useState } from 'react';
import router, { useRouter } from "next/router"
import { useQuery } from '@apollo/client';
import { Table } from 'flowbite-react';
import QRCode from "react-qr-code";

import { GET_RECEIPT } from '@/apollo/spaces';

import FrontLayout from '@/layout/FrontLayout';
import { Activity } from '@/types';

function Receipt() {
  const { query } = useRouter();
  const [booking, setBooking] = useState<any>({})

  const {data, loading, error} = useQuery(GET_RECEIPT, {
    variables: {
      txRef: query.reference
    },
    onCompleted: data => {
      setBooking(data.booking)
    }
  })
  return (
    <FrontLayout>

      { !loading && <section className='my-10 px-5 lg:px-20'>
        <div className='flex space-x-5'>
          <p className='font-bold text-[20px]'>{booking.customer.firstName} {booking.customer.lastName}</p> <p className='font-bold text-[20px]'>{booking.customer.phone}</p>
        </div>
        <div className='flex space-x-5'>
          <p className='font-bold text-[20px]'>Paid:</p> <p className='font-bold text-[20px]'> {booking.currency} {booking.total}</p>
        </div>
        <div className='flex space-x-5'>
          <p className='font-bold'>Reservation At:</p> <p>{booking.spaceId.name} {booking.spaceId.location}</p>
        </div>
        <div className='flex space-x-5'>
          <p className='font-bold'>Booking status:</p> <p>{booking.status}</p>
        </div>
        <div className='flex space-x-5'>
          <p className='font-bold'>Payment status:</p> <p>{booking.payment}</p>
        </div>
        <div className='flex space-x-5'>
          <p className='font-bold'>Special Request:</p> <p>{booking.specialRequest}</p>
        </div>
        <div className='flex space-x-5'>
          <p className='font-bold'>Reference:</p> <p>{query.reference}</p>
        </div>
        <div className='py-5 overflow-scroll lg:overflow-hidden'>
          <Table>
            <Table.Head>
              <Table.HeadCell>
                Name
              </Table.HeadCell>
              <Table.HeadCell>
                Ticket(s)
              </Table.HeadCell>
              <Table.HeadCell>
                date
              </Table.HeadCell>
              <Table.HeadCell>
                Price {`(${booking.currency})`}
              </Table.HeadCell>
              <Table.HeadCell>
                Duration
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">

              { booking.tickets.map((ticket: Activity) => (
                <>
                  <Table.Row key={ticket._id}>
                    <Table.Cell>
                      {ticket.name}
                    </Table.Cell>
                    <Table.Cell>
                      {ticket.count}
                    </Table.Cell>
                    <Table.Cell>
                      {ticket.date}
                    </Table.Cell>
                    <Table.Cell>
                      {ticket.price}
                    </Table.Cell>
                    <Table.Cell>
                      {ticket.duration}
                    </Table.Cell>
                  </Table.Row>
                </>
              ))

              }
            </Table.Body>
          </Table>
        </div>
        <div className='w-full lg:w-2/3 pt-5'>
        <QRCode
            size={156}
            style={{ height: "auto", width: "50%" }}
            value={`https://pentria.app/receipt?reference=${query.reference}`}
            viewBox={`0 0 156 156`}
        />
        <p className=' pt-3'>{query.reference}</p>
        </div>
      </section>

      }

    </FrontLayout>
  )
}

export default Receipt